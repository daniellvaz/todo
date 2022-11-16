import { Request, Response } from "express";
import { FindOneUserService } from "./FindOneUserService";

export class FindOneUserController {
  constructor(private findOneUserService: FindOneUserService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const user = await this.findOneUserService.execute(id);

    return res.json({ user })
  }
}