import { FindTaskService } from "./FindTaskService";
import { FindTaskController } from "./FindTaskController";
import { TaskModel } from "../../../models/Task";

const findTaskService = new FindTaskService(TaskModel);
export const findTaskController = new FindTaskController(findTaskService);