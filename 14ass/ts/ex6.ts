interface Human {
    name: string,
    age: number,
    hobbies: string[],
}

let human1: Human = {
    name: 'shaked',
    age: 30,
    hobbies: ['football', 'tennis']
}
let human2: Human = {
    name: 'chen',
    age: 24,
    hobbies: ['GM', 'TT']
}

let humans: Human[] = [human1, human2];


function printHuman(human: Human) {
    console.log(human.name);
    console.log(human.age);
    console.log(human.hobbies);
}

printHuman(human1);