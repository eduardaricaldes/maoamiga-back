import { Router } from "express";
import { SignUp, SignIn, GetScheduler, ListSchedulerByUserId, UpdateScheduler, DeleteScheduler } from "@/controllers";
import { authenticateUser, validateBody } from "@/middlewares";
import { signInSchema, signUpUserSchema, SchedullingUserSchema, updateScheduleSchema } from "@/schemas/user";
import { SchedulerController } from "@/controllers/user/scheduling";

const userRouter = Router();

userRouter.post("/sign-up", validateBody(signUpUserSchema), SignUp);
userRouter.post("/sign-in", validateBody(signInSchema), SignIn);
userRouter.post("/schedulling", authenticateUser, validateBody(SchedullingUserSchema), SchedulerController);
userRouter.get("/scheduler/{id}", authenticateUser, GetScheduler);
userRouter.get("/scheduler", authenticateUser, ListSchedulerByUserId);
userRouter.put("/scheduler/{id}", [validateBody(updateScheduleSchema), authenticateUser], UpdateScheduler);
userRouter.delete("/scheduler/{id}", authenticateUser, DeleteScheduler);

export { userRouter };
