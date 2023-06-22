import { Router } from "express";
import { authenticateProvider, validateBody } from "@/middlewares";
import { signInSchema, signUpUserProviderSchema } from "@/schemas";
import { SingUpProvider, SignInProvider, GetScheduler, GetSchedules } from "@/controllers";

const providerRouter = Router();

providerRouter.post("/sign-up", validateBody(signUpUserProviderSchema), SingUpProvider);
providerRouter.post("/sign-in", validateBody(signInSchema), SignInProvider);
providerRouter.get("/schedules/{providerId}", authenticateProvider, GetScheduler);
providerRouter.get("/schedules", authenticateProvider, GetSchedules);

export { providerRouter };
