import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createCategory(categoryName: string, categoryId: number) {
  await prisma.category.upsert({
    create: {
      name: categoryName,
    },
    where: {
      id: categoryId,
    },
    update: {},
  });
}

async function main() {
  Promise.all([
    createCategory("Petz", 1),
    createCategory("Programação", 2),
    createCategory("Jardinagem", 3),
    createCategory("Hidráulica", 4),
    createCategory("Elétrica", 5),
  ]);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
