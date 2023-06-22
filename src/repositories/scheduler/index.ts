import { Scheduler } from "@prisma/client";
import { prisma } from "@/config";
import { SchedulerParamsBody } from "@/services";

export async function getSchedulesByProviderId(providerId: number) {
  const schedules = await prisma.scheduler.findMany({
    where: {
      providerServiceId: providerId,
    },
    include: {
      user: true,
      serviceProvider: true,
    },
  });
  return schedules;
}

export async function getSchedulesByUserId(userId: number) {
  const scheduler = await prisma.scheduler.findMany({
    where: {
      userId: userId,
    },
  });
  return scheduler;
}
//buscar scheduler pelo id
export async function getScheduleById(schedulerId: number) {
  const scheduler = await prisma.scheduler.findUnique({
    where: {
      id: schedulerId,
    },
  });
  return scheduler;
}

export async function getScheduleByIdAndUserId(schedulerId: number, userId: number) {
  const scheduler = await prisma.scheduler.findFirst({
    where: {
      id: schedulerId,
      userId: userId,
    },
  });
  return scheduler;
}

export async function getScheduleByIdAndProviderId(schedulerId: number, providerId: number) {
  const scheduler = await prisma.scheduler.findFirst({
    where: {
      id: schedulerId,
      providerServiceId: providerId,
    },
  });
  return scheduler;
}
//Update

export async function updateScheduler(schedulerId: number, updatedFields: Partial<Scheduler>) {
  const updatedScheduler = await prisma.scheduler.update({
    where: { id: schedulerId },
    data: updatedFields,
  });

  return updatedScheduler;
}
//buscar se existe agendamento na data e hora

export async function findSchedulerByDateAndTime(schedulerId: number, scheduleDate: Date, scheduleTime: Date) {
  const scheduler = await prisma.scheduler.findFirst({
    where: {
      id: schedulerId,
      scheduleDate,
      scheduleTime,
    },
  });

  return scheduler;
}

export async function findSchedulerByProviderIdAndDateTime(providerId: number, scheduleDate: Date, scheduleTime: Date) {
  const scheduler = await prisma.scheduler.findFirst({
    where: {
      providerServiceId: providerId,
      scheduleDate,
      scheduleTime,
    },
  });

  return scheduler;
}

export async function createScheduler(params: SchedulerParamsBody) {
  const newScheduler = await prisma.scheduler.create({
    data: {
      userId: params.userId,
      providerServiceId: params.providerServiceId,
      scheduleDate: params.scheduleDate,
      scheduleTime: params.scheduleTime,
    },
    include: {
      user: true,
    },
  });

  return newScheduler;
}

export async function deleteScheduleById(schedulerId: number) {
  const scheduler = await prisma.scheduler.delete({
    where: {
      id: schedulerId,
    },
  });
  return scheduler;
}
