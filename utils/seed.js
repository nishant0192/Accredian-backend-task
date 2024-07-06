const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seedData = [
  { program: 'Professional Certificate Program in Product Management', referrerBonus: '7000 INR', refereeBonus: '9000 INR', enrolled: true },
  { program: 'PG Certificate Program in Strategic Product Management', referrerBonus: '9000 INR', refereeBonus: '11000 INR', enrolled: true },
  { program: 'Executive Program in Data Driven Product Management', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Executive Program in Product Management', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Advanced Certification in Product Management', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Executive Program in Product Management and Project Management', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Program B', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program D', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program F', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program H', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program J', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program L', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program N', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program O', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Program P', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program Q', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: true },
  { program: 'Program R', referrerBonus: '10000 INR', refereeBonus: '10000 INR', enrolled: false },
  { program: 'Program S', referrerBonus: '11000 INR', refereeBonus: '11000 INR', enrolled: true },
  { program: 'Program T', referrerBonus: '11000 INR', refereeBonus: '11000 INR', enrolled: false },
];

async function main() {
  for (const data of seedData) {
    await prisma.program.create({
      data,
    });
  }
}

main()
  .then(() => {
    console.log('Data seeded successfully');
    return prisma.$disconnect();
  })
  .catch((error) => {
    console.error(error);
    return prisma.$disconnect();
  });
