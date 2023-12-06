import { faker } from '@faker-js/faker';
import { prismaDB } from '../connection';


async function insertDataPersonAndHomes(interCount: number = 1) {
    for (let index = 0; index < interCount; index++) {
        prismaDB.home.create({
            data: {
                address: '',
                city: '',
                rooms: 5,
                personId: ''
            }
        })
    }
}