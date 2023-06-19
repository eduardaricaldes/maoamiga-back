import { DateTime } from "luxon";
import { Scheduler } from "@prisma/client";
import { SeachProviderId } from "@/repositories/provider";
import { prisma } from "@/config";

export async function SchedulerService(
  params: SchedulerParamsBody
): Promise<SchedulerInterface | boolean | undefined> {
  const provider = await SeachProviderId(params.providerServiceId);
  if (!provider) {
    return false;
  }

  const existingScheduler = await prisma.scheduler.findFirst({
    where: {
      providerServiceId: params.providerServiceId,
      scheduleDate: params.scheduleDate,
      scheduleTime: params.scheduleTime,
    },
  });
  if (existingScheduler) {
    return false;
  }

  const newScheduler = await prisma.scheduler.create({
    data: {
      userId: params.userId,
      providerServiceId: params.providerServiceId,
      scheduleDate: params.scheduleDate,
      scheduleTime: params.scheduleTime,
    },
    include: {
      user: true,
    },
  });

  const schedulerData: SchedulerInterface = {
    id: newScheduler.id,
    userId: newScheduler.userId,
    user: {
      id: newScheduler.user.id,
      name: newScheduler.user.name,
      email: newScheduler.user.email,
      password: newScheduler.user.password,
      location: newScheduler.user.location,
    },
    providerServiceId: newScheduler.providerServiceId,
    scheduleDate: DateTime.fromJSDate(newScheduler.scheduleDate),
    scheduleTime: DateTime.fromJSDate(newScheduler.scheduleTime),
    createdAt: DateTime.fromJSDate(newScheduler.createdAt),
    updatedAt: DateTime.fromJSDate(newScheduler.updatedAt),
  };
  return schedulerData;
}

export type SchedulerParamsBody = Pick<
  Scheduler,
  "providerServiceId" | "scheduleDate" | "scheduleTime" | "userId"
>;

interface SchedulerInterface {
  id: number;
  userId: number;
  user: UserInterface;
  providerServiceId: number;
  scheduleDate: DateTime;
  scheduleTime: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
}

interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  location: string;
}
