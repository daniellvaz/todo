import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  constructor(private createUserService: CreateUserService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { firstName, lastName, email, password } = req.body;

    const user = await this.createUserService.execute({ firstName, lastName, email, password });

    return res.json({ user })
  }
}