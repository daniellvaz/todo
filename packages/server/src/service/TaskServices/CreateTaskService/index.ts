import { CreateTaskService } from "./CreateTaskService";
import { CreateTaskController } from "./CreateTaskController";
import { TaskModel } from "../../../models/Task";

const createTaskService = new CreateTaskService(TaskModel);
export const createTaskController = new CreateTaskController(createTaskService);