import { Model } from 'mongoose';
import { Task } from '../../../entities/Task';

export class FindOneTaskService {
  constructor(private taskService: Model<Task>){}

  async execute(id: string): Promise<Task> {
    const task = await this.taskService.findById(id);

    if(!task) {
      throw new Error("Task not found")
    }

    return task;
  }
}