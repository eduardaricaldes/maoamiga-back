import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "@/middlewares";
import { UserGetProvidersParams, searchProviderByCategoryAndUserLocation } from "@/services/user";
import { BaseApplicationError } from "@/errors";

export async function GetProvidersByCategoryAndUserLocation(req: AuthenticatedRequest, res: Response) {
  try {
    const { categoryId, lat, long } = req.body as UserGetProvidersParams;
    const providers = await searchProviderByCategoryAndUserLocation({
      categoryId,
      lat,
      long,
    });
    return res.status(httpStatus.OK).send({ providers });
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
