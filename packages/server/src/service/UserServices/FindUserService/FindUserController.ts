import { Request, Response } from "express";
import { FindUserService } from "./FindUserService";

export class FindUserController {
  constructor(private findUserService: FindUserService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const users = await this.findUserService.execute();

    return res.json({ users })
  }
}