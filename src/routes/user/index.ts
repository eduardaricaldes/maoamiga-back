import { Router } from 'express';
import { SignUp } from '@/controllers';
import { validateBody } from '@/middlewares';
import { signUpUserSchema } from '@/schemas';

const userRouter = Router();

userRouter.post('/sign-up', validateBody(signUpUserSchema), SignUp);

export { userRouter };