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
// Same as the below
let fightRobotArmy1 = (robots) => {
    console.log('FIGHT!');
};
