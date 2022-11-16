import { UserModel } from "../../../models/User";
import { FindOneUserController } from "./FindOneUserController";
import { FindOneUserService } from "./FindOneUserService";

const findOneUserService = new FindOneUserService(UserModel);
export const findOneUserController = new FindOneUserController(findOneUserService);