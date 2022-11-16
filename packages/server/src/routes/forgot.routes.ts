import { Router } from "express";
import { authController } from "../service/AuthServices";
import { forgotPasswordController } from "../service/ForgotPasswordService";

const router = Router();

router
  .get("/:id", (req, res) => forgotPasswordController.execute(req, res))
export default router