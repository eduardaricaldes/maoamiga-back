import { Prisma } from '@prisma/client';
import { prisma } from '@/config';
import { SignUpBodyParamsProvider } from '@/services';

export async function findByEmailProvider(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.ProviderFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

export async function CreatProvideDefault(params: SignUpBodyParamsProvider) {
  const {
    name,
    email,
    password,
    location,
    availableEnd,
    availableStart,
    categoryId,
  } = params;
  return prisma.provider.create({
    data:{
      name,
      email,
      password,
      location,
      availableEnd,
      availableStart,
      categoryId,
    }
  })
}