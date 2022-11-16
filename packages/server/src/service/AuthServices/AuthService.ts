import bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import jwt from 'jsonwebtoken';

import { User } from '../../entities/User';
import { AuthDTO } from './AuthDTO';
export class AuthService {
  constructor(private userModel: Model<User>){}

  async execute({ email, password }: AuthDTO){
    const user = await this.userModel.findOne({ email });
    
    if(!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password!);

    if(!isMatch) {
      throw new Error("User or password is invalid");
    }

    const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY!);

    return { token, user }
  } 
}