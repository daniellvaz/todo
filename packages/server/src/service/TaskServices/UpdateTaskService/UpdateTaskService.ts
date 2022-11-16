import { Model } from 'mongoose';
import { Task } from '../../../entities/Task';
import { UpdateTaskDTO } from "./UpdateTaskDTO";

export class UpdateTaskService {
  constructor(private taskService: Model<Task>){}

  async execute(id: string, { title, owner, status }: UpdateTaskDTO): Promise<Task> {
    const task = await this.taskService.findOneAndUpdate({ _id: id }, { title, owner, status });

    if(!task) {
      throw new Error("Task not found")
    }

    return task;
  }
}