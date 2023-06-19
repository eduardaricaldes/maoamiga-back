import { Router } from "express";
import { SignUp, SignIn } from "@/controllers";
import { validateBody } from "@/middlewares";
import {
  signInSchema,
  signUpUserSchema,
  SchedullingUserSchema,
} from "@/schemas";
import { SchedulerController } from "@/controllers/user/scheduling";

const userRouter = Router();

userRouter.post("/sign-up", validateBody(signUpUserSchema), SignUp);
userRouter.post("/sign-in", validateBody(signInSchema), SignIn);
userRouter.post(
  "/schedulling",
  validateBody(SchedullingUserSchema),
  SchedulerController
);

export { userRouter };
