import { notExistSchedule } from "./error";
import { getScheduleByIdAndProviderId } from "@/repositories/scheduler";

export async function getScheduleByProvider(scheduleId: number, providerId: number) {
  const schedules = await getScheduleByIdAndProviderId(scheduleId, providerId);
  if (!schedules) {
    throw notExistSchedule();
  }

  return schedules;
}
