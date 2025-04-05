import { Task } from '../../data/models/Task';
import { TaskRepository } from '../../data/repositories/TaskRepository';

export class UpdateTask {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(id: number, updates: Partial<Task>): Promise<Task> {
    return this.taskRepository.updateTask(id, updates);
  }
}