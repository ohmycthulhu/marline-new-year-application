import React from 'react';
import axios from 'axios';
import {User, Task, Type} from './HomePageTypes';
import HomePageView from "./HomePageView";
import { subscribe } from '../helpers/socket';

const exampleData: Array<Type> = []

interface TaskTimer {
  timer: NodeJS.Timeout,
  taskId: number,
  typeId: number
}

interface HomePageState {
  types: Array<Type>,
  users: Array<User>,
  isLoading: boolean,
  timers: Array<TaskTimer>
}

class HomePage extends React.Component<{}, HomePageState> {

  state = {
    types: exampleData,
    isLoading: false,
    users: (Array<User>()),
    timers: []
  };

  constructor(public props: {}) {
    super(props);

    this.startTask = this.startTask.bind(this);
    this.endTask = this.endTask.bind(this);
    this.clearTask = this.clearTask.bind(this);
  }

  componentDidMount(): void {
    this.loadTypes();
    this.loadUsers();
  }

  loadTypes(): void {
    axios.get('/states').then(({ data: types }) => {
      this.setState({
        types
      });
      this._subscribeToSocket(types);

      // Check for already started tasks
      types.forEach((type: Type) => {
        type.tasks.forEach((task: Task) => {
          const status: null | string | number = task.status;
          if (typeof status === 'number') {
            this._startTask(type, task, status);
          }
        });
      });
    });
  }

  loadUsers(): void {
    axios.get('/users').then(response => {
      this.setState({
        users: response.data
      })
      subscribe('newUser', (user: User) => {
        this.setState({
          users: [
            user,
            ...this.state.users
          ]
        })
      })
    })
  }

  _subscribeToSocket(types: Array<Type>) {
    types.forEach((type: Type) => {
      type.tasks.forEach(task => {
        console.log(`Subscribing to status:${type.id}:${task.id}`);
        subscribe(`status:${type.id}:${task.id}`, (data: any) => {
          if (data === 'start') {
            this._startTask(type, task)
          }
          if (data === 'end') {
            this._endTask(type, task);
          }
          if (data === 'clear') {
            this._clearTask(type, task);
          }
        })
      })
    })
  }

  _findTask (typeId: number, taskId: number): {typeIndex: number, taskIndex: number} | null {
    const types = this.state.types;
    for (const typeIndex in types) {
      if (!types.hasOwnProperty(typeIndex) || typeId !== types[typeIndex].id) {
        continue
      }
      const type = types[typeIndex];
      const tasks = type.tasks;
      for (const taskIndex in tasks) {
        if (!tasks.hasOwnProperty(taskIndex) || tasks[taskIndex].id !== taskId) {
          continue;
        }
        return { typeIndex: parseInt(typeIndex), taskIndex: parseInt(taskIndex) };
      }
    }
    return null;
  }

  _updateTask (typeId: number, taskId: number, callback: (task: Task) => Task) {
    const searchResult = this._findTask(typeId, taskId);
    if (!searchResult) {
      return;
    }
    const types = this.state.types;
    const { typeIndex, taskIndex } = searchResult;
    types[typeIndex].tasks[taskIndex] = callback(types[typeIndex].tasks[taskIndex]);
    this.setState({
      types
    });
  }

  _deleteTimer (typeId: number, taskId: number) {
    const timer: TaskTimer | undefined = this.state.timers
      .find((timer: TaskTimer) => timer.taskId === taskId && timer.typeId === typeId);
    console.log('Deleting timers - ', typeId, taskId, timer)
    this.setState({
      timers: this.state.timers
        .filter((t: TaskTimer) => t.taskId !== taskId || t.typeId !== typeId)
    });
    if (timer !== undefined) {
      // @ts-ignore
      clearInterval(timer.timer)
    }
  }

  startTask(type: Type, task: Task): void {
    if (this.state.isLoading) {
      return;
    }
    this.setState({
      isLoading: true
    });
    axios.post(`states/${type.id}/${task.id}/start`).then(({ data: { status, error }}) => {
      if (status !== 'success') {
        console.log('Error on starting - ', error);
        alert(error);
        return;
      }
      this._startTask(type, task);
    }).catch((e) => {
      alert('Error occurred on starting');
      console.log('Error on starting', e);
    }).then(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  _startTask (type: Type, task: Task, startTime: number = 0): void {
    const searchResults = this._findTask(type.id, task.id);
    if (!searchResults || this.state.timers.some((t: TaskTimer) => t.taskId === task.id && t.typeId === type.id)) {
      return;
    }
    const {typeIndex, taskIndex} = searchResults;
    const {duration: maxTime} = task;
    let time = startTime;
    const timer = setInterval(() => {
      time += 1;
      if (time >= maxTime) {
        this.endTask(type, task);
      } else {
        const types = this.state.types;
        types[typeIndex].tasks[taskIndex].status = time;
        this.setState({
          types
        })
      }
    }, 1000);
    this.setState({
      timers: [
        ...this.state.timers,
        {
          timer,
          taskId: task.id,
          typeId: type.id
        }
      ]
    });
  }

  endTask(type: Type, task: Task): void {
    if (this.state.isLoading) {
      return;
    }
    this.setState({
      isLoading: true
    });
    axios.post(`/states/${type.id}/${task.id}/end`).then(() => {
      this._endTask(type, task);
    }).catch(e => {
      alert('Couldn\'t end task');
      console.log('Error on ending task', e);
    }).then(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  _endTask(type: Type, task: Task): void {
    this._updateTask(type.id, task.id, (task: Task) => {
      task.status = 'end';
      return task;
    });
    this._deleteTimer(type.id, task.id);
  }

  clearTask(type: Type, task: Task): void {
    if (this.state.isLoading) {
      return;
    }
    this.setState({
      isLoading: true
    });
    axios.post(`/states/${type.id}/${task.id}/clear`).then(() => {
      this._clearTask(type, task);
    }).catch(e => {
      alert('Couldn\'t end task');
      console.log('Error on ending task', e);
    }).then(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  _clearTask(type: Type, task: Task): void {
    this._updateTask(type.id, task.id, (task: Task) => {
      task.status = null;
      return task;
    });
    this._deleteTimer(type.id, task.id);
  }

  render(): React.ReactElement<any, any> {
    return (
      <HomePageView
        types={this.state.types}
        loading={this.state.isLoading}
        onStartTask={this.startTask}
        onEndTask={this.endTask}
        onClearTask={this.clearTask}
        users={this.state.users}
      />
    )
  }
}

export default HomePage;

