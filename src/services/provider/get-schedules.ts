import { getSchedulesByProviderId } from "@/repositories/scheduler";

export async function GetAllSchedules(id: number) {
  return await getSchedulesByProviderId(id);
}
