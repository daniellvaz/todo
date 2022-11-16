import { Router } from "express";

import { findUserController } from "../service/UserServices/FindUserService";
import { createUserController } from "../service/UserServices/CreateUserService";
import { updateUserController } from "../service/UserServices/UpdateUserService";
import { deleteUserController } from "../service/UserServices/DeleteUserService";
import { findOneUserController } from "../service/UserServices/FindOneUserService";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const router = Router();

router
  .get("/find", ensureAuthenticated, (req, res) => findUserController.execute(req, res))
  .get("/find/:id", ensureAuthenticated, (req, res) => findOneUserController.execute(req, res))
  .post("/create", (req, res) => createUserController.execute(req, res))
  .put("/update/:id", ensureAuthenticated, (req, res) => updateUserController.execute(req, res))
  .delete("/delete/:id", ensureAuthenticated, (req, res) => deleteUserController.execute(req, res))
export default router