import { Model } from "mongoose";
import { User } from "../../../entities/User";
import { UpdateUserDTO } from "./UpdateUserDTO";

export class UpdateUserService {
  constructor(private userModel: Model<User>){}

  async execute(
    id: string,
    { firstName, lastName, email, image }: UpdateUserDTO
  ): Promise<User> {
    const user = await this.userModel.findOneAndUpdate({ _id: id }, {
      firstName, 
      lastName, 
      email, 
      image
    });

    if(!user) {
      throw new Error("User not found")
    }

    return user;
  }
}