import { Prisma } from "@prisma/client";
import { prisma } from "@/config";
import { SignUpBodyParams } from "@/services/user";

export async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

// example to save: const squareGeometry = { type: 'Polygon', coordinates: [[[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]]] };
export async function createUserDefault(params: SignUpBodyParams) {
  const { name, email, password, location } = params;
  return prisma.user.create({
    data: {
      name,
      email,
      password,
      location: JSON.stringify(location),
    },
  });
}
