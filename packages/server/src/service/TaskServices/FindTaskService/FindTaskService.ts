import { Model } from 'mongoose';
import { Task } from '../../../entities/Task';

export class FindTaskService {
  constructor(private taskService: Model<Task>){}

  async execute(): Promise<Task[]> {
    const task = await this.taskService.find();

    return task;
  }
}