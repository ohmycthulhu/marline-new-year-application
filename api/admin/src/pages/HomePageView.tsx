import React from 'react';
import { Task, Type } from './HomePageTypes';
import '../styles/homePage.css';

export interface HomePageViewProps {
  types: Array<Type>,
  loading: boolean,
  onStartTask: (type: Type, task: Task) => void,
  onEndTask: (type: Type, task: Task) => void,
  onClearTask: (type: Type, task: Task) => void,
}

interface HomePageViewState {
  selectedType: Type | null
}

class HomePageView extends React.Component<HomePageViewProps, HomePageViewState> {

  state = {
    selectedType: null
  };

  selectType(type: Type): void {
    this.setState({
      selectedType: type
    })
  }

  render(): React.ReactElement<any, any> {
    const typesButtons = this.props.types.map(type => (
      <div className="col home-type-buttons"
           key={type.id}
           onClick={() => this.selectType(type)}
      >
        { type.name }
      </div>
    ));
    let typeBody = null;
    if (this.state.selectedType !== null && !this.props.loading) {
      // @ts-ignore
      const type: Type = this.state.selectedType;
      const { name, tasks } = type;
      const tasksBody = tasks.map((task: Task) => {
        const status: string = task.status === 'end' ? 'Ended'
          : (typeof task.status !== 'number' ? 'Not started' : task.status + 's');
        return (
          <div className="col-12 col-sm-6 col-md-4"
               key={task.id}
          >
            <div className="task-body">
              <div className="task-name task-info">{ task.name }</div>
              <div className="task-duration task-info">Duration: { task.duration }s</div>
              <div className="task-status task-info">Status: { status }</div>
              <div className="task-buttons">
                <button
                  className="btn btn-success btn-sm"
                  disabled={typeof task.status === 'number'}
                  onClick={() => this.props.onStartTask(type, task)}
                >
                  Start
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  disabled={typeof task.status !== 'number'}
                  onClick={() => this.props.onEndTask(type, task)}>
                  End
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.props.onClearTask(type, task)}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        )
      });
      typeBody = (
        <div>
          <h4 className="type-name">
            { name }
          </h4>
          <div className="row tasks">
            { tasksBody }
          </div>
        </div>
      )
    }
    if (this.props.loading) {
      typeBody = (
        <img src={require('../assets/loading.gif')}
             alt="Loading"/>
      )
    }
    return (
      <div className="container-fluid">
        { /* Types as buttons */ }
        <div className="row home-type-buttons-holder">
          { typesButtons }
        </div>
        { /* Type info */ }
        <div className="home-selected-type">
          { typeBody }
        </div>
      </div>
    )
  }
}

export default HomePageView;

