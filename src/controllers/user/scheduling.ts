import { Request, Response } from "express";
import httpStatus from "http-status";
import { SchedulerParamsBody, SchedulerService } from "@/services/user/scheduling";
import { BaseApplicationError } from "@/errors";

export async function SchedulerController(req: Request, res: Response) {
  try {
    const { userId, providerServiceId, scheduleDate, scheduleTime } = req.body as SchedulerParamsBody;
    const response = await SchedulerService({
      userId,
      providerServiceId,
      scheduleDate,
      scheduleTime,
    });
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
