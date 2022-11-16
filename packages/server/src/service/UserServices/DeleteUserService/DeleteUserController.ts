import { Request, Response } from "express";
import {DeleteUserService } from "./DeleteUserService";

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService){}

  async execute(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;

    const user = await this.deleteUserService.execute(id);

    return res.json({ message: `User ${user.firstName} is deleted` });
  }
}