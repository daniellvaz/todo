import { DeleteTaskService } from "./DeleteTaskService";
import { DeleteTaskController } from "./DeleteTaskController";
import { TaskModel } from "../../../models/Task";

const deleteTaskService = new DeleteTaskService(TaskModel);
export const deleteTaskController = new DeleteTaskController(deleteTaskService);