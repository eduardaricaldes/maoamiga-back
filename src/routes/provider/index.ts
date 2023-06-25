import { Router } from "express";
import { authenticateProvider, validateBody } from "@/middlewares";
import { signInSchemaProvider, signUpProviderSchema } from "@/schemas/provider";
import { SingUpProvider, SignInProvider, GetScheduler, GetSchedules } from "@/controllers";

const providerRouter = Router();

providerRouter.post("/sign-up", validateBody(signUpProviderSchema), SingUpProvider);
providerRouter.post("/sign-in", validateBody(signInSchemaProvider), SignInProvider);
providerRouter.get("/schedules/{providerId}", authenticateProvider, GetScheduler);
providerRouter.get("/schedules", authenticateProvider, GetSchedules);

export { providerRouter };
