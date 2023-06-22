import { Request, Response } from "express";
import httpStatus from "http-status";
import { getScheduleUserId } from "@/services/user";
import { BaseApplicationError } from "@/errors";

export async function DeleteScheduler(req: Request, res: Response) {
  const { userId } = req.params;
  const { id } = req.params;
  try {
    const schedules = await getScheduleUserId(parseInt(id), parseInt(userId));
    return res.json(schedules);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
