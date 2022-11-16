import { Model } from "mongoose";
import { User } from "../../../entities/User";

export class FindOneUserService {
  constructor(private userModel: Model<User>){}

  async execute(id: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: id, deletedAt: null });

    if(!user) {
      throw new Error("User not found")
    }

    return user;
  }
}