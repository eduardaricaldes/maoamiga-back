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

export async function schedullingHasAvailabilityProvider(SchedulerTime: Date, providerId: number): Promise<boolean> {
  const provider = await prisma.provider.findFirst({
    where: {
      id: providerId,
    },
  });

  if (provider) {
    const { availableStart, availableEnd } = provider;

    const startHour = availableStart.getHours();
    const startMinute = availableStart.getMinutes();
    const endHour = availableEnd.getHours();
    const endMinute = availableEnd.getMinutes();
    const checkHour = SchedulerTime.getHours();
    const checkMinute = SchedulerTime.getMinutes();

    if (checkHour > startHour && checkHour < endHour) {
      return true;
    } else if (checkHour === startHour && checkMinute >= startMinute) {
      return true;
    } else if (checkHour === endHour && checkMinute <= endMinute) {
      return true;
    }
  }
  return false;
}
