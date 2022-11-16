import jwt from "jsonwebtoken";
import { NextFunction, Response, Request } from "express";

export default async function ensureAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void>{
  const bearerToken = req.headers['authorization'];

  if(!bearerToken) {
    throw new Error("Unauthorized")
  }

  const [_, token] = bearerToken.split(" ");

  const response = jwt.verify(token, process.env.PRIVATE_KEY!);

  if(!response) {
    throw new Error("Unauthorized")
  }

  res.locals.user = token;

  next();
}