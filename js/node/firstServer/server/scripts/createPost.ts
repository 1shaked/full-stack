import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';



export async function createPost () {

    const prismaDB = new PrismaClient();

    const unit = faker.science.unit();
    const new_person = await prismaDB.post.create({ // mutation
        data: {
            title: unit.name + ' ' + unit.symbol ,
            likes: 5,
            // content: ''
        }
    });
    console.log(new_person)
}

createPost()