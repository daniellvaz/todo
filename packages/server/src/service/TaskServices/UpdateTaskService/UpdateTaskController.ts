import { Request, Response } from "express";
import { UpdateTaskService } from "./UpdateTaskService";

export class UpdateTaskController {
  constructor(private updateTaskService: UpdateTaskService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const { title, owner, status } = req.body;

    const task = await this.updateTaskService.execute(id, { title, owner, status });

    return res.status(200).json({ task });
  }   
}