import { faker } from '@faker-js/faker';
import { prismaDB } from '../connection';


export async function insertDataPersonAndHomes(interCount: number = 1) {
    const min_age = 20
    for (let index = 0; index < interCount; index++) {
        const person = await prismaDB.person.create({
            data: {
                name: faker.person.firstName(),
                bio: faker.person.bio(),
                age: min_age + index,
                homes: []
            }
        })
        const home = await prismaDB.home.create({
            data: {
                address: faker.person.jobType() + ' ' +(index + 5),
                city: faker.person.jobArea(),
                rooms: 3,
                persons: [{
                    id: person.id,
                    name: person.name,
                }]
            }
        });
        prismaDB.person.update({
            where: {
                id: person.id,
            },
            data: {
                ...person,
                homes: [
                    {
                        id: home.id,
                        address: home.address,
                        rooms: home.rooms
                    }
                ]
            }
        })

    }
}