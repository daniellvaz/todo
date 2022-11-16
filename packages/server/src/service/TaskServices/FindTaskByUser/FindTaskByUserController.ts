import { Request, Response } from "express";
import { FindTaskByUserService } from "./FindTaskByUserService";

export class FindTaskByUserController {
  constructor(private findTaskByUserService: FindTaskByUserService){}

  async execute(req: Request, res: Response): Promise<Response> {
    const { owner } = req.params;
    const tasks = await this.findTaskByUserService.execute(owner);

    return res.status(200).json({ tasks })
  }
}