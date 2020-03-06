//////////////////
//  JavaScript Basics - Data Types
//////////////////

// var and let function the same, let allows block scoping
// const - cannot reassign, but can be mutated

//// PRIMITIVE TYPES
// String
const name = 'Stratton';
// Number
const age = 24;
// Boolean
const haskids = false;
// Null (logs as object)
const boat = null;
// Undefined
let nothingToSeeHere;
// Symbol
const sym = Symbol();

//// REFERENCE TYPES - Objects
// Array
const hobbies = ['flying small propeller planes', 'working out'];
// Object literal
const address = {
    city: 'Boca Raton',
    state: 'FL'
}

console.log(console.table({
        name: [name, typeof name],
        age: [age, typeof age],
        haskids: [haskids, typeof haskids],
        boat: [boat, typeof boat],
        nothingToSeeHere: [nothingToSeeHere, typeof nothingToSeeHere],
        sym: [sym, typeof sym],
        hobbies: [hobbies, typeof hobbies],
        address: [address, typeof address]
    }
));