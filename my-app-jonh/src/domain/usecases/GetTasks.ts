import { Task } from '../../data/models/Task';
import { TaskRepository } from '../../data/repositories/TaskRepository';

export class GetTasks {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(): Promise<Task[]> {
    return this.taskRepository.getTasks();
  }
}