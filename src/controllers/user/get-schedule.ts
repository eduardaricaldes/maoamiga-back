import { Response } from "express";
import httpStatus from "http-status";
import { getScheduleUserId } from "@/services/user";
import { BaseApplicationError } from "@/errors";
import { AuthenticatedRequest } from "@/middlewares";

export async function GetScheduler(req: AuthenticatedRequest, res: Response) {
  const { userId = 0 } = req;
  const { id } = req.params;
  try {
    const schedules = await getScheduleUserId(parseInt(id), userId);
    return res.json(schedules);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
