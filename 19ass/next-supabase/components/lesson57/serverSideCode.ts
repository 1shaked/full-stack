'use server';
export async function getNumber() {
    // talk with the database and send back the number
    const n = Math.random()
    console.log('get number ' + n)
    return n;
}