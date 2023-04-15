interface Human {
    name: string,
    age: number,
    isMale: boolean,
}
function printUser(human: Human) {
    console.log(`name: ${human.name}, age: ${human.age}, isMale: ${human.isMale}`);
}

printUser({name: 'John', isMale: true , age: 30});