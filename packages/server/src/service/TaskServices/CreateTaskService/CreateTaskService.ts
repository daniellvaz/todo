import { Model } from 'mongoose';
import { Task } from '../../../entities/Task';
import { CreateTaskDTO } from "./CreateTaskDTO";

export class CreateTaskService {
  constructor(private taskService: Model<Task>){}

  async execute({ title, owner }: CreateTaskDTO): Promise<Task> {
    if(!owner) {
      throw new Error("Owner is required")
    }

    const newTask = new Task({ title, owner });
    const task = await this.taskService.create(newTask);

    return task;
  }
}