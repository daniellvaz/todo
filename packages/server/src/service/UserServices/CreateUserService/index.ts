import { UserModel } from "../../../models/User";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const createUserService = new CreateUserService(UserModel);
export const createUserController = new CreateUserController(createUserService);