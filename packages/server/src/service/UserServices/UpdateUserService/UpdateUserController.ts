import { Request, Response } from "express";
import { UpdateUserService } from "./UpdateUserService";

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const { firstName, lastName, email, image } = req.body

    const user = await this.updateUserService.execute(id, { firstName, lastName, email, image });

    return res.json({ user });
  }
}