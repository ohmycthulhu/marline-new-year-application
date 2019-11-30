class Session {
  constructor (tasks, options = {}, events = {}) {
    const { maxTime } = options;
    const { start, progress, end, clear } = events;
    this.tasks = tasks;
    this.tasksStates = tasks.reduce((acc, task) => Object.assign(acc, { [task.id]: null }), {});
    this.onStart = start;
    this.onProgress = progress;
    this.onEnd = end;
    this.onClear = clear;
    this.timers = {};
  }

  start (task = null) {
    task = task ? this.tasks.find(t => t.id.toString() === task.toString()) : this.tasks[0];
    if (this.timers[task.id]) {
      return;
    }
    console.log('We are starting!');
    if (this.onStart) {
      this.onStart(task.id);
    }
    this._start(task.id, task.duration || 0);
  }

  _start (task, maxTime, startTime = 0) {
    const interval = .5;
    let time = startTime;
    console.log('Max time is ', maxTime);
    this.timers[task] = setInterval(() => {
      time += interval;
      this.tasksStates[task] = time;
      if (this.onProgress) {
        this.onProgress(task, time, interval);
      }
      if (time >= maxTime) {
        this.end(task);
      }
    }, interval * 1000)
  }

  end (task) {
    if (!this.timers[task]) {
      return;
    }
    console.log('Ending session!');
    if (this.onEnd) {
      this.onEnd(task);
    }
    this.tasksStates[task] = 'end';
    clearInterval(this.timers[task]);
    this.timers[task] = null;
  }

  clear (task) {
    this.tasksStates[task] = null;
    if (this.timers[task]) {
      clearInterval(this.timers[task]);
      this.timers[task] = null;
    }
    this.onClear(task);
  }

  get state () {
    return this.tasksStates;
  }

  set state (val) {
    this.tasksStates = {};
    for (const task in val) {
      if (!val.hasOwnProperty(task)) { return }
      const initialValue = val[task];
      const value = initialValue === 'end' ? 'end' : parseFloat(initialValue);
      if (!isNaN(value)) {
        const maxTime = (this.tasks.find(t => t.id.toString() === task.toString()) || {}).duration || 0;
        this._start(task, maxTime, value);
      }
      this.tasksStates[task] = value;
    }
  }

}

module.exports = Session;

