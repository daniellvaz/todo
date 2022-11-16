import { FindOneTaskService } from "./FindOneTaskService";
import { FindOneTaskController } from "./FindOneTaskController";
import { TaskModel } from "../../../models/Task";

const findOneTaskService = new FindOneTaskService(TaskModel);
export const findOneTaskController = new FindOneTaskController(findOneTaskService);