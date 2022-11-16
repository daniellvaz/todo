import { Request, Response } from "express";
import { CreateTaskService } from "./CreateTaskService";

export class CreateTaskController {
  constructor(private createTaskService: CreateTaskService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { owner } = req.params;
    const { title } = req.body;

    const task = await this.createTaskService.execute({ title, owner });

    return res.status(200).json({ task });
  }   
}