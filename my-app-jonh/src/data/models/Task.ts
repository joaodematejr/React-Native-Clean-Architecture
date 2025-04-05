export class Task {
    id: number;
    title: string;
    completed: boolean;
  
    constructor(id: number, title: string, completed: boolean = false) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }