import { Request, Response } from "express";
import httpStatus from "http-status";
import { getScheduleByProvider } from "@/services/provider";
import { BaseApplicationError } from "@/errors";

export async function GetScheduler(req: Request, res: Response) {
  const { providerId } = req.params;
  const { id } = req.params;
  try {
    const schedules = await getScheduleByProvider(parseInt(id), parseInt(providerId));
    return res.json(schedules);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
