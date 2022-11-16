import { Router } from "express";

import { resetPasswordController } from './../service/ResetPasswordService/index';

const router = Router();

router
  .get("/:id", (req, res) => resetPasswordController.execute(req, res))
export default router;