
interface Example {
    [key: string]: string;
}

const ex: Example = {
    name: "Jane User",
    age: "20",
    yy: "20",
    zz: "20",
} 
const ex1: Example = {
    ar: "Jane User",
    te: "Jane"

}

interface Partners{ 
    [key: string]: {
        name: string;
        address: string;
    };
}

const Partners: Partners = {
    "1": {
        name: "Jane User",
        address: "20",
    },
    "2": {
        name: "JaneXXX",
        address: "8484",
    }
}

interface Ex1 {
    [key: string]: boolean | number;
}
const a: Ex1 = {
    "1": true,
    "2": 2,
    "3": false,
}

export {};
