type Age = number;
type Person = {
    name: string;
    age: Age;
    email: string;
};

function printPerson(person: Person): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Email: ${person.email}`);
}

const john: Person = {
    name: "John",
    age: 30,
    email: "john@example.com",
};

printPerson(john);


// alias

type Roles = 'admin' | 'user' | 'guest'

const role1: Roles = 'admin'
const role2: Roles = 'user'
const role3: Roles = prompt('Enter role') as Roles; // but this is not safe

type Icon = '❃' | '✡' | '☝️' | '😂' | '😎' | '😊' | '🔥'
// https://www.madeintext.com/facebook-symbols/

const icon: Icon = '😂'

type IconRole = `${Icon}-${Roles}` 
// export { };