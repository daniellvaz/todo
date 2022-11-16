import { Request, Response } from "express";
import { ResetPasswordService } from "./ResetPasswordService";

export class ResetPasswordController {

  constructor(private resetPasswordService: ResetPasswordService){}

  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { password, secret } = req.body;

    await this.resetPasswordService.execute({ id, secret, password });

    return res.status(200).json({ ok: true })
  }
}