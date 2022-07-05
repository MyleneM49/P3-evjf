const { PrismaClient } = rquire("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log(
    await prisma.activity.findmany(),
    prisma.place.findmany(),
    prisma.number.findmany()
  );
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}
