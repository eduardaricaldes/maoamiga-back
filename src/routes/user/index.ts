import { Router } from 'express';
import { SignUp,SignIn } from '@/controllers';
import { validateBody } from '@/middlewares';
import { signInSchema, signUpUserSchema } from '@/schemas';

const userRouter = Router();

userRouter.post('/sign-up', validateBody(signUpUserSchema), SignUp);
userRouter.post('/sign-in', validateBody(signInSchema), SignIn);


export { userRouter };