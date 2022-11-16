import { FindTaskByUserService } from "./FindTaskByUserService";
import { FindTaskByUserController } from "./FindTaskByUserController";
import { TaskModel } from "../../../models/Task";

const findTaskByUserService = new FindTaskByUserService(TaskModel);
export const findTaskByUserController = new FindTaskByUserController(findTaskByUserService)