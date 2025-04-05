import { Task } from '../models/Task';

let tasks: Task[] = []; 

export const api = {
  createTask: async (title: string): Promise<Task> => {
    const newTask = new Task(tasks.length + 1, title);
    tasks.push(newTask);
    return newTask;
  },
  getTasks: async (): Promise<Task[]> => tasks,
  updateTask: async (id: number, updates: Partial<Task>): Promise<Task> => {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updates } : task
    );
    return tasks.find((task) => task.id === id)!;
  },
  deleteTask: async (id: number): Promise<void> => {
    tasks = tasks.filter((task) => task.id !== id);
  },
};