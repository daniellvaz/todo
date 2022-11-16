import { UserModel } from "../../../models/User";
import { FindUserController } from "./FindUserController";
import { FindUserService } from "./FindUserService";

const findUserService = new FindUserService(UserModel);
export const findUserController = new FindUserController(findUserService);