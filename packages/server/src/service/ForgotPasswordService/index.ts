import { UserModel } from "../../models/User";
import { ForgotPasswordController } from "./ForgotPasswordController";
import { ForgotPasswordService } from "./ForgotPasswordService";

const forgotPasswordService = new ForgotPasswordService(UserModel);
export const forgotPasswordController = new ForgotPasswordController(forgotPasswordService);