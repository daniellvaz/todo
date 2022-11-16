import { Model } from "mongoose";
import { User } from "../../../entities/User";

export class DeleteUserService {
  constructor(private userModel: Model<User>){}

  async execute(id: string): Promise<User> {
    const user = await this.userModel.findOneAndUpdate({ _id: id },{ deletedAt: new Date()});

    if(!user) {
      throw new Error("User not found")
    }

    return user;
  }
}