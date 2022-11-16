import { ResetPasswordService  } from "./ResetPasswordService";
import { ResetPasswordController } from "./ResetPasswordController";
import { UserModel } from "../../models/User";

const resetPasswordService = new ResetPasswordService(UserModel);
export const resetPasswordController = new ResetPasswordController(resetPasswordService);