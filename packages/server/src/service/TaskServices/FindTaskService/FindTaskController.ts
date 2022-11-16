import { Request, Response } from "express";
import { FindTaskService } from "./FindTaskService";

export class FindTaskController {
  constructor(private findTaskService: FindTaskService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const tasks = await this.findTaskService.execute();

    return res.status(200).json({ tasks });
  }   
}