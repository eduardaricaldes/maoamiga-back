import { Router } from 'express';
import { validateBody } from '@/middlewares';
import { signInSchema, signUpUserProviderSchema } from '@/schemas';
import { SingUpProvider,SignInProvider } from '@/controllers';

const providerRouter = Router();

providerRouter.post('/sign-up', validateBody(signUpUserProviderSchema), SingUpProvider);
providerRouter.post('/sign-in', validateBody(signInSchema), SignInProvider);


export { providerRouter };