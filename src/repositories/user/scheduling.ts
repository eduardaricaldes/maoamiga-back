import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

export async function create(data: Prisma.SchedulerUncheckedCreateInput) {
  return prisma.scheduler.create({
    data,
  });
}