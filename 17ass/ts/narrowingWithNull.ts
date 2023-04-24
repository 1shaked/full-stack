function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        //   for (const s of strs) {

        //     // only because of "strictNullChecks": true,
        //     console.log(s);
        //   }
        console.log(strs);

    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}


function printAllTest(strs: string | string[] | null) {
    if (typeof strs === "object" && strs !== null) {
        // this make sure that strs is not null
        for (const s of strs) {

            // only because of "strictNullChecks": true,
            console.log(s);
        }
        console.log(strs);

    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}



type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}


export {};