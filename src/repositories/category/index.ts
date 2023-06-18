
import { prisma } from '@/config';

export async function getCategoryById(id: number) {
  return prisma.category.findUnique({
    where: { id },
  });
}
