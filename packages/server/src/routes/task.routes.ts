import { Router } from "express";

import { findTaskController } from "../service/TaskServices/FindTaskService";
import { updateTaskController } from "../service/TaskServices/UpdateTaskService";
import { createTaskController } from "../service/TaskServices/CreateTaskService";
import { findOneTaskController } from "../service/TaskServices/FindOneTaskService";
import { deleteTaskController } from "../service/TaskServices/DeleteTaskService";
import { findTaskByUserController } from "../service/TaskServices/FindTaskByUser";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const router = Router();

router
  .get("/find", ensureAuthenticated, (req, res) => findTaskController.execute(req, res))
  .get("/find/:id", ensureAuthenticated, (req, res) => findOneTaskController.execute(req, res))
  .get("/find-by-user/:owner", ensureAuthenticated, (req, res) => findTaskByUserController.execute(req, res))
  .post("/create/:owner", ensureAuthenticated, (req, res) => createTaskController.execute(req, res))
  .put("/update/:id", ensureAuthenticated, (req, res) => updateTaskController.execute(req, res))
  .delete("/delete/:id", ensureAuthenticated, (req, res) => deleteTaskController.execute(req, res))
export default router