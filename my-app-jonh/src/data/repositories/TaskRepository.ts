import { Task } from '../models/Task';
import { api } from '../api/api';

export class TaskRepository {
  async createTask(title: string): Promise<Task> {
    return api.createTask(title);
  }

  async getTasks(): Promise<Task[]> {
    return api.getTasks();
  }

  async updateTask(id: number, updates: Partial<Task>): Promise<Task> {
    return api.updateTask(id, updates);
  }

  async deleteTask(id: number): Promise<void> {
    return api.deleteTask(id);
  }
}