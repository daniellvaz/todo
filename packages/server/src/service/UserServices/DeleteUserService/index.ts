import { UserModel } from "../../../models/User";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";

const deleteUserService = new DeleteUserService(UserModel);
export const deleteUserController = new DeleteUserController(deleteUserService);