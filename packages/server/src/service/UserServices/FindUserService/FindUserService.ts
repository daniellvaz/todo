import { Model } from "mongoose";
import { User } from "../../../entities/User";

export class FindUserService {
  constructor(private userModel: Model<User>){}

  async execute(): Promise<User[]> {
    const users = await this.userModel.find({ deletedAt: null });

    return users;
  }
}