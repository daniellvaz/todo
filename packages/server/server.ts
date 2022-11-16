import "dotenv/config";
import "express-async-errors";

import cors from "cors";
import mongoose from "mongoose";
import express, { NextFunction, Request, Response } from "express";

import authRouter from "./src/routes/auth.routes";
import userRouter from "./src/routes/user.routes";
import taskRouter from "./src/routes/task.routes";
import resetRouter from "./src/routes/reset.routes";
import forgotRouter from "./src/routes/forgot.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/forgot", forgotRouter);
app.use("/reset", resetRouter);
app.use("/authenticate", authRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err.message === "Unauthorized") {
    return res.status(401).json({ error: err.message });
  } 

  return res.status(500).json({ error: err.message });
})

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => console.log("Mongodb is connected! 📦"))
  .catch((err) => console.log("Mongodb error: " + err.message))

app.listen(process.env.PORT, () => console.log(`Server is running at port ${process.env.PORT} 🔥`));