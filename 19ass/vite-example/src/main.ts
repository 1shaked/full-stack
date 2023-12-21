// import './style.css'
// // import { supabase } from './supabaseClient';
// import {getCountries} from './country/getCountries'
// import { createCountry } from './country/createCountry';
// import { createCityFunction } from './city/createCity';

// const addCountryButton = document.getElementById('addCountryButton');

// addCountryButton?.addEventListener('click', createCountry);
// getCountries();


// const addCityButton = document.getElementById('addCityButton');

// addCityButton?.addEventListener('click', createCityFunction);

class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const A = new Node(1);
const B = new Node(2);
const C = new Node(3);
const D = new Node(4);
const E = new Node(5);
const F = new Node(6);
const G = new Node(7);
debugger;
// added the nodes for A (1)
A.left = B;
A.right = C;
// added the nodes for B (2)
B.left = D;
B.right = E;
// added the nodes for C (3)
C.left = F;
C.right = G;

// A.left = A
// A.right = A
console.log(A);

function treePrintFromLeaf(N: Node) {
    // no child on left and right
    if (N.left ==  null && N.right == null) {
        console.log(N.value);
    }
    else {
        // child both on left and right
        if (N.left != null && N.right != null) {
            treePrintFromLeaf(N.left);
            treePrintFromLeaf(N.right);
            console.log(N.value);
        }
        // child on left only
        else if (N.left != null && N.right == null) {
            treePrintFromLeaf(N.left);
            console.log(N.value)
        }
        // child on right only
        else if (N.right != null && N.left == null) {
            treePrintFromLeaf(N.right);
            console.log(N.value)
        }
    }
}
debugger;
treePrintFromLeaf(A);


export {};
