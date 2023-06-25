import { Response } from "express";
import httpStatus from "http-status";
import { getAllSchedules } from "@/services/user";
import { BaseApplicationError } from "@/errors";
import { AuthenticatedRequest } from "@/middlewares";

export async function ListSchedulerByUserId(req: AuthenticatedRequest, res: Response) {
  const { userId = 0 } = req;
  try {
    const schedules = await getAllSchedules(userId);
    return res.json(schedules);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
