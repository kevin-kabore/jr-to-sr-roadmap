"use strict";
const sum = (a, b) => {
    return a + b;
};
const answer = sum(10, 5);
// Bool
let isCool = true;
// Number
let age = 23;
// String 
let eyeColor = 'brown';
let favoriteQuote = `I'm not old, I'm only ${age}`;
// Array
let pets = ['cat', 'dog', 'pig'], pets2 = ['lion', 'dragon', 'lizard'];
// Object 
let person = {
    a: 'Kevin'
};
// null and undefined
let und = undefined;
let nullll = null;
// Tuple
// Specify index types
let basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let sizeName = Size[2];
let sizeNumber = Size.Small;
console.log(sizeName); // will output: Medium
console.log(sizeNumber); // will output: 1
// Any - Not recommended;
let whateverType = `DON'T DO THIS!!!`;
whateverType = basket;
// Void 
// function returns nothing
let sing = () => {
    console.log('Returns nothing!');
};
// Never
// Function never returns
// Doesn't have an endpoint. Usually throws an error
let error = () => {
    throw Error('oops');
};
// Ensures that all args have count, type, and magic 
// as matching types
let fightRobotArmy = (robots) => {
    console.log('FIGHT!');
};
fightRobotArmy({ count: 2, type: 'Droid' }); // magic is optional;
// Same as the below
let fightRobotArmy1 = (robots) => {
    console.log('FIGHT!');
};
let dog = {};
dog.count;
// Function
let fightRobotArmy2 = (robots) => {
    console.log('FIGHT!');
};
let fightRobotArmy3 = (robots) => {
    console.log('FIGHT!');
    return 10;
};
// Class
class Animal {
    constructor(sound) {
        this.sing = 'rippit';
        this.sing = sound;
    }
    greet() {
        return `Hello ${this.sing}`;
    }
}
let lion = new Animal('RAAAWWWRRR');
// console.log(lion.sing); // unable to access 
console.log(lion.greet());
// Union
let confused = 'Twenty';
// let veryConfused: string | number = true won't work
let veryConfused = true;
