import { Model } from "mongoose";
import { Task } from "../../../entities/Task";

export class FindTaskByUserService {
  constructor(private taskService: Model<Task>){}
  
  async execute(owner: string): Promise<Task[]> {
    const tasks = await this.taskService.find({ owner });

    return tasks;
  }
}