import { Request, Response } from "express";
import { DeleteTaskService } from "./DeleteTaskService";

export class DeleteTaskController {
  constructor(private updateTaskService: DeleteTaskService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const task = await this.updateTaskService.execute(id);

    return res.status(200).json({ task });
  }   
}