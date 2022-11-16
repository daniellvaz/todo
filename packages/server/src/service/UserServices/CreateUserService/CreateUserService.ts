import bcrypt from "bcrypt";
import { Model } from "mongoose";

import { User } from "../../../entities/User";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserService {
  constructor(private userModel: Model<User>){}

  async execute({ firstName, lastName, email, password }: CreateUserDTO): Promise<Omit<User, "password">> {
    if(!email || !firstName || !lastName || !password) {
      throw new Error("Values is required")
    }

    const hash = await bcrypt.hash(password, 10);
    const image = `https://ui-avatars.com/api/?name=${firstName}&background=6BFF8C&color=fff`
    const newUser = new User({ firstName, lastName, image, email, password: hash });
    const user = await this.userModel.create(newUser);

    return { 
      firstName: user.firstName, 
      lastName: user.lastName, 
      email: user.email,
      image: user.image,
    }
  }
}