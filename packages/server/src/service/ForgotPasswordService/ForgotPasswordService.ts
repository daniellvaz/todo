import { Model } from "mongoose";
import { User } from "../../entities/User";
import mailProvider from "../../providers/mailProvider";

export class ForgotPasswordService {

  constructor(private userModel: Model<User>){}

  async codeGenerate() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  }

  async execute(id: string): Promise<void> {
    const user = await this.userModel.findById(id);

    if(!user) {
      throw new Error("User not found")
    }

    const secretNumber =  await this.codeGenerate();

    const result = await user.update({ resetPasswordToken: secretNumber });

    if(!result) {
      throw new Error("Erro on save secret number");
    }

    const text = `Seu código de recuperação é: ${secretNumber}`;

    const mail = await mailProvider({ to: user.email, subject: "Forgot Password", text });

    if(!mail) {
      throw new Error("Error on sending email");
    }
  }
}