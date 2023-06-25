import { Response } from "express";
import httpStatus from "http-status";
import { getScheduleByProvider } from "@/services/provider";
import { BaseApplicationError } from "@/errors";
import { AuthenticatedProviderRequest } from "@/middlewares";

export async function GetScheduler(req: AuthenticatedProviderRequest, res: Response) {
  const { providerId = 0 } = req;
  const { id } = req.params;
  try {
    const schedules = await getScheduleByProvider(parseInt(id), providerId);
    return res.json(schedules);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
