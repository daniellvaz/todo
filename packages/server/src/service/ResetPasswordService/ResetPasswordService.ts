import bcrypt from "bcrypt";
import { Model } from 'mongoose';

import { User } from './../../entities/User';
import { ResetPasswordDTO } from './ResetPasswordDTO';

export class ResetPasswordService {
  
  constructor(private userModel: Model<User>){}

  async execute({ id, secret, password }: ResetPasswordDTO): Promise<void> {
    const user = await this.userModel.findById(id);

    if(!user) {
      throw new Error("User not found");
    }

    const isMatchSecret = user.resetPasswordToken === secret;

    if(!isMatchSecret) {
      throw new Error("Secret is invalid");
    }

    const newPassword = await bcrypt.hash(password, 10);

    await user.update({ password: newPassword });
    await user.update({ resetPasswordToken: null });
  }
}