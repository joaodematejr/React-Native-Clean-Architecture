import { Task } from '../../data/models/Task';
import { TaskRepository } from '../../data/repositories/TaskRepository';

export class CreateTask {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(title: string): Promise<Task> {
    if (!title) throw new Error('Title is required');
    return this.taskRepository.createTask(title);
  }
}