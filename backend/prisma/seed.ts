import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const servicePlans = await prisma.servicesPlans.create({
    data: {
      name: "Red Hat Enterprise Linux Server",
      description: "The world's leading enterprise Linux platform. Deploy it on physical systems, as a guest on the most widely available hypervisors, or in the cloud.",
      price: 383.90,
      duration: 12
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });