import express, { Express } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from '@/config';
loadEnv();

import {
  authenticationRouter,
  userRouter,
} from "@/routes";

const app = express();

app.use(express.json());
app
  .use(cors())
  .use(express.json())
  .use("/auth", authenticationRouter)
  .use("/user", userRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;