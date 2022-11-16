import { Router } from "express";
import { authController } from "../service/AuthServices";

const router = Router();

router
  .post("/", (req, res) => authController.execute(req, res))
export default router