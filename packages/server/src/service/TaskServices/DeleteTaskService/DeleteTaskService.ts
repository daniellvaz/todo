import { Model } from 'mongoose';
import { Task } from '../../../entities/Task';

export class DeleteTaskService {
  constructor(private taskService: Model<Task>){}

  async execute(id: string): Promise<Task> {
    const task = await this.taskService.findOneAndDelete({ _id: id });

    if(!task) {
      throw new Error("Task not found")
    }

    return task;
  }
}