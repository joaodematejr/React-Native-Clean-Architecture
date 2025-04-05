import { useState, useEffect } from 'react';
import { Task } from '../../data/models/Task';
import { TaskRepository } from '../../data/repositories/TaskRepository';
import { CreateTask } from '../../domain/usecases/CreateTask';
import { GetTasks } from '../../domain/usecases/GetTasks';
import { UpdateTask } from '../../domain/usecases/UpdateTask';
import { DeleteTask } from '../../domain/usecases/DeleteTask';

const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTask(taskRepository);
const getTasksUseCase = new GetTasks(taskRepository);
const updateTaskUseCase = new UpdateTask(taskRepository);
const deleteTaskUseCase = new DeleteTask(taskRepository);

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const taskList = await getTasksUseCase.execute();
    setTasks(taskList);
  };

  const addTask = async () => {
    const newTask = await createTaskUseCase.execute(title);
    setTasks([...tasks, newTask]);
    setTitle('');
  };

  const toggleTask = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      await updateTaskUseCase.execute(id, { completed: !task.completed });
      loadTasks();
    }
  };

  const removeTask = async (id: number) => {
    await deleteTaskUseCase.execute(id);
    loadTasks();
  };

  return { tasks, title, setTitle, addTask, toggleTask, removeTask };
};