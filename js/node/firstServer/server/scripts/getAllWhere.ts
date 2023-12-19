import { PrismaClient } from "@prisma/client";


export async function getAllWhere() {
    const prismaDB = new PrismaClient();

    const posts = await prismaDB.post.findMany({ // query
        select: {
            id: false,
            title: true,
        },
        where: {
            likes: {
                gte: 3,
            }
        }
    })
    console.log(posts)
    return posts;
}


getAllWhere()
