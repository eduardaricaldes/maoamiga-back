import { Prisma, Provider } from "@prisma/client";
import { prisma } from "@/config";
import { SignUpBodyParamsProvider } from "@/services";

export async function findByEmailProvider(email: string, select?: Prisma.ProviderSelect) {
  const params: Prisma.ProviderFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.provider.findUnique(params);
}

export async function createProvider(params: SignUpBodyParamsProvider) {
  const { name, email, password, location, availableEnd, availableStart, categoryId } = params;
  return prisma.provider.create({
    data: {
      name,
      email,
      password,
      location,
      availableEnd,
      availableStart,
      categoryId,
    },
  });
}

export async function seachProviderId(providerId: number): Promise<Provider | null> {
  const provider = await prisma.provider.findUnique({
    where: {
      id: providerId,
    },
  });
  return provider;
}

export async function schedullingHasAvailabilityProvider(SchedulerTime: Date, providerId: number) {
  const provider = await prisma.provider.findFirst({
    where: {
      id: providerId,
      availableStart: {
        lte: SchedulerTime,
      },
      availableEnd: {
        gte: SchedulerTime,
      },
    },
  });
  return provider;
}
