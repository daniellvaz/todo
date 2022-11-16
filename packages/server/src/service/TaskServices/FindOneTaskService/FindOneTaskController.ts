import { Request, Response } from "express";
import { FindOneTaskService } from "./FindOneTaskService";

export class FindOneTaskController {
  constructor(private findOneTaskService: FindOneTaskService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;

    const task = await this.findOneTaskService.execute(id);

    return res.status(200).json({ task });
  }   
}