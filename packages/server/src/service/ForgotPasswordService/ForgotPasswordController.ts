import { Request, Response } from "express";
import { ForgotPasswordService } from "./ForgotPasswordService";

export class ForgotPasswordController {

  constructor(private forgotPasswordService: ForgotPasswordService){}

  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this.forgotPasswordService.execute(id);

    return res.status(200).json({ ok: true })
  }
}