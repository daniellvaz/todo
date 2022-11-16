import { UpdateTaskService } from "./UpdateTaskService";
import { UpdateTaskController } from "./UpdateTaskController";
import { TaskModel } from "../../../models/Task";

const updateTaskService = new UpdateTaskService(TaskModel);
export const updateTaskController = new UpdateTaskController(updateTaskService);