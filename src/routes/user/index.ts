import { Router } from "express";
import { SignUp, SignIn, GetScheduler, ListSchedulerByUserId, UpdateScheduler, DeleteScheduler } from "@/controllers";
import { validateBody } from "@/middlewares";
import { signInSchema, signUpUserSchema, SchedullingUserSchema } from "@/schemas";
import { SchedulerController } from "@/controllers/user/scheduling";

const userRouter = Router();

userRouter.post("/sign-up", validateBody(signUpUserSchema), SignUp);
userRouter.post("/sign-in", validateBody(signInSchema), SignIn);
userRouter.post("/schedulling", validateBody(SchedullingUserSchema), SchedulerController);
userRouter.get("/scheduler/{id}", GetScheduler);
userRouter.get("/scheduler", ListSchedulerByUserId);
userRouter.put("/scheduler/{id}", UpdateScheduler);
userRouter.delete("/scheduler/{id}", DeleteScheduler);

export { userRouter };
