import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

export async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}