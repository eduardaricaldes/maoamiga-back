import { notExistSchedules } from "./error";
import { getSchedulesByUserId } from "@/repositories/scheduler";

export async function getAllSchedules(userId: number) {
  const schedules = await getSchedulesByUserId(userId);
  if (schedules.length === 0) {
    throw notExistSchedules();
  }

  return schedules;
}
