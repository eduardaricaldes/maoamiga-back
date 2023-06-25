import { Response } from "express";
import httpStatus from "http-status";
import { GetAllSchedules } from "@/services/provider";
import { BaseApplicationError } from "@/errors";
import { AuthenticatedProviderRequest } from "@/middlewares";

export async function GetSchedules(req: AuthenticatedProviderRequest, res: Response) {
  const { providerId = 0 } = req;

  try {
    const schedules = await GetAllSchedules(providerId);

    return res.json(schedules);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
