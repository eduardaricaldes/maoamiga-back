import { Scheduler } from "@prisma/client";
import { getScheduleById, updateScheduler, findSchedulerByDateAndTime } from "@/repositories/scheduler";
import { notfoundSchedulerId, failupdateScheduler, itisnotavailable } from "@/services/provider";
import { schedullingHasAvailabilityProvider } from "@/repositories/provider";

export default async function updateSchedulerById(params: UpdateSchedulerParams, schedulerId: number): Promise<void> {
  const scheduler = await getScheduleById(schedulerId);
  if (!scheduler) {
    throw notfoundSchedulerId();
  }

  const existisSchedule = await findSchedulerByDateAndTime(schedulerId, params.scheduleDate, params.scheduleTime);
  if (existisSchedule) {
    throw failupdateScheduler();
  }
  const isInAvailability = await schedullingHasAvailabilityProvider(params.scheduleTime, scheduler.providerServiceId);
  if (!isInAvailability) {
    throw itisnotavailable();
  }

  scheduler.scheduleDate = params.scheduleDate || scheduler.scheduleDate;
  scheduler.scheduleTime = params.scheduleTime || scheduler.scheduleTime;
  scheduler.updatedAt = new Date();

  await updateScheduler(schedulerId, scheduler);
}

export type UpdateSchedulerParams = Pick<Scheduler, "scheduleDate" | "scheduleTime" | "userId">;
