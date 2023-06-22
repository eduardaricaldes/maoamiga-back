import { notExistSchedule } from "./error";
import { deleteScheduleById, getScheduleByIdAndUserId } from "@/repositories/scheduler";

export async function getScheduleUserId(scheduleId: number, userId: number) {
  const schedule = await getScheduleByIdAndUserId(scheduleId, userId);
  if (!schedule) {
    throw notExistSchedule();
  }

  await deleteScheduleById(schedule.id);
}
