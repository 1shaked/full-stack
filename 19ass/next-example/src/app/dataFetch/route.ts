'use server'

export async function getRandomNumber(): Promise<number> {
  console.log('getRandomNumber()');
  return Math.random();
}