
interface HumanInterface {
    name: string;
    age: number;
    id: string ;
}
// class HumanClass {
//     name: string;
//     age: number;
//     id: string;
// }

// const humanClassVariable = new HumanClass();
const obj: HumanInterface = {
    name: 'shaked chen', // -> shaked
    age: 50, // -> 51
    id: 'id----',
};

function addAge(human: HumanInterface) {
    human.age = human.age + 1;
}

addAge(obj);






interface DogInterface {
  color: string;
  age: number;
  size: string | number;
  weight: number | string;
  countBark: number;
  bark: Function;
}
function e() {

}
const dogInter: DogInterface = {
  color: 'red',
  age: 10,
  size: 'm',
  weight: 100,
  countBark: 0,
  bark: (dog: DogInterface) => {
    dog.countBark = dog.countBark + 1;
  }
}

dogInter.color = 'black';
dogInter.size = 'S';
dogInter.bark(dogInter);
