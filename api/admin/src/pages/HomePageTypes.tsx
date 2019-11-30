export interface Task {
  id: number,
  name: string,
  duration: number,
  status: null | string | number
}

export interface Type {
  id: number,
  code: string,
  name: string,
  tasks: Array<Task>
}
