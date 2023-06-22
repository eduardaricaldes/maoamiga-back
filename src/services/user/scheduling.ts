import { Scheduler } from "@prisma/client";
import { notfindiduser, notexistscheduler } from "./error";
import { schedullingHasAvailabilityProvider, seachProviderId } from "@/repositories/provider";
import { itisnotavailable } from "@/services/provider";
import { createScheduler, findSchedulerByDateAndTime } from "@/repositories/scheduler";

export async function SchedulerService(params: SchedulerParamsBody): Promise<SchedulerInterface | boolean | undefined> {
  const provider = await seachProviderId(params.providerServiceId);
  if (!provider) {
    throw notfindiduser;
  }

  const existingScheduler = await findSchedulerByDateAndTime(provider.id, params.scheduleDate, params.scheduleTime);
  if (existingScheduler) {
    throw notexistscheduler();
  }
  const isInAvailability = await schedullingHasAvailabilityProvider(params.scheduleTime, provider.id);
  if (!isInAvailability) {
    throw itisnotavailable();
  }

  const newScheduler = await createScheduler(params);

  const schedulerData: SchedulerInterface = {
    id: newScheduler.id,
    userId: newScheduler.userId,
    user: {
      id: newScheduler.user.id,
      name: newScheduler.user.name,
      email: newScheduler.user.email,
      location: newScheduler.user.location,
    },
    providerServiceId: newScheduler.providerServiceId,
    scheduleDate: newScheduler.scheduleDate,
    scheduleTime: newScheduler.scheduleTime,
    createdAt: newScheduler.createdAt,
    updatedAt: newScheduler.updatedAt,
  };
  return schedulerData;
}

export type SchedulerParamsBody = Pick<Scheduler, "providerServiceId" | "scheduleDate" | "scheduleTime" | "userId">;
interface SchedulerInterface {
  id: number;
  userId: number;
  user: UserInterface;
  providerServiceId: number;
  scheduleDate: Date;
  scheduleTime: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface UserInterface {
  id: number;
  name: string;
  email: string;
  location: string;
}
