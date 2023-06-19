import {
  SchedulerParamsBody,
  SchedulerService,
} from "@/services/user/scheduling";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function SchedulerController(req: Request, res: Response) {
  try {
    const { userId, providerServiceId, scheduleDate, scheduleTime } =
      req.body as SchedulerParamsBody;
    const response = await SchedulerService({
      userId,
      providerServiceId,
      scheduleDate,
      scheduleTime,
    });
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({});
  }
}
