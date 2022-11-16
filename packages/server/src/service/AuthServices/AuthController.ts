import { AuthService } from './AuthService';
import { Request, Response } from "express";

export class AuthController {
  constructor(private authService: AuthService){}

  async execute(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const data = await this.authService.execute({ email, password });

    return res.status(200).json({ data });
  }
}