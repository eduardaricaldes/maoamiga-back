import { Request, Response } from "express";
import httpStatus from "http-status";
import { UpdateSchedulerParams } from "@/services/user";
import { BaseApplicationError } from "@/errors";
import updateSchedulerById from "@/services/user/update-schedule";

export async function UpdateScheduler(req: Request, res: Response) {
  const { userId, scheduleDate, scheduleTime } = req.body as UpdateSchedulerParams;
  const { id } = req.params;
  try {
    await updateSchedulerById(
      {
        userId,
        scheduleDate,
        scheduleTime,
      },
      parseInt(id),
    );
    return res.status(204).send({});
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
