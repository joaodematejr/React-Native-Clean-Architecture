import { TaskRepository } from '../../data/repositories/TaskRepository';

export class DeleteTask {
  private taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async execute(id: number): Promise<void> {
    return this.taskRepository.deleteTask(id);
  }
}