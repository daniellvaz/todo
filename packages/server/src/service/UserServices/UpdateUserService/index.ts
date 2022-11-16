import { UserModel } from "../../../models/User";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

const updateUserService = new UpdateUserService(UserModel);
export const updateUserController = new UpdateUserController(updateUserService);