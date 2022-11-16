import { UserModel } from './../../models/User';
import { AuthController } from "./AuthController";
import { AuthService } from "./AuthService";

const authService = new AuthService(UserModel);
export const authController = new AuthController(authService);