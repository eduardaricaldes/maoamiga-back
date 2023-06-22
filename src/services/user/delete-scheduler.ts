import { notExistSchedule } from "./error";
import { getScheduleByIdAndUserId } from "@/repositories/scheduler";

export async function deleteScheduleUserId(scheduleId: number, userId: number) {
  const schedules = await getScheduleByIdAndUserId(scheduleId, userId);
  if (!schedules) {
    throw notExistSchedule();
  }

  return schedules;
}
