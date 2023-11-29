import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function generateData() {
    // Insert Dummy Authors
    const author1 = await prisma.author.create({
        data: {
            name: faker.person.firstName(),
            bio: faker.person.jobTitle(),
        },
    });

    const author2 = await prisma.author.create({
        data: {
            name: faker.person.firstName(),
            bio: faker.person.jobTitle(),
        },
    });

    // Insert Dummy Books
    await prisma.book.create({
        data: {
            title: faker.lorem.words(3),
            description: faker.lorem.words(15),
            publishedAt: new Date(),
            authorId: author1.id,
        },
    });

    await prisma.book.create({
        data: {
            title: faker.lorem.words(3),
            description: faker.lorem.words(15),
            publishedAt: new Date(),
            authorId: author2.id,
        },
    });

    console.log('Dummy data inserted');
}

// main()
//     .catch((e) => {
//         throw e;
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });