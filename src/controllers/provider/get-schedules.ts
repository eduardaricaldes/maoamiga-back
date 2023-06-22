import { Request, Response } from "express";
import httpStatus from "http-status";
import { GetAllSchedules } from "@/services/provider";
import { BaseApplicationError } from "@/errors";

export async function GetSchedules(req: Request, res: Response) {
  const providerId = parseInt(req.params.id);

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
