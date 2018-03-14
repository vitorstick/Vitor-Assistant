export interface ITask {
  $key?: string;
  completed: boolean;
  timestamp: number;
  value: string;
}

export class Task implements ITask {
  completed = false;
  timestamp = new Date().getTime();
  user?: string;
  value;

  constructor(value: string, user?: string) {
    this.value = value;
    if (user) {
      this.user = user;
    }
  }
}
