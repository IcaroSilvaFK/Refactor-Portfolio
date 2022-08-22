import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.$connect();
}
main();

export { prismaClient };
