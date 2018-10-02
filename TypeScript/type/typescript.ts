const sum = (a: number, b: number): number => {
	return a + b;
}

const answer = sum(10, 5);

// Bool
let isCool: boolean = true;

// Number
let age: number = 23;

// String 
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'],
	pets2: Array<string> = ['lion', 'dragon', 'lizard'];


// Object 
let person: object = {
	a: 'Kevin'
}

// null and undefined
let und: undefined = undefined;
let nullll: null = null;

// Tuple
// Specify index types
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium= 2, Large= 3};
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;
console.log(sizeName); // will output: Medium
console.log(sizeNumber); // will output: 1

// Any - Not recommended;
let whateverType: any = `DON'T DO THIS!!!`;
whateverType = basket;


// Void 
// function returns nothing
let sing = (): void => {
	console.log('Returns nothing!');
}

// Never
// Function never returns
// Doesn't have an endpoint. Usually throws an error
let error = () => {
	throw Error('oops');
}

// Interface
// Used well with objects
// Basically making a new type
interface RobotArmy {
	count: number,
	type: string,
	magic?: string
}
// Ensures that all args have count, type, and magic 
// as matching types
let fightRobotArmy = (robots: RobotArmy) => {
	console.log('FIGHT!');
}
fightRobotArmy({count: 2, type: 'Droid'}) // magic is optional;

// Same as the below
let fightRobotArmy1 = (robots: {count: number, type: string, magic: string}) => {
	console.log('FIGHT!')
}


// Type Assertion
interface CatArmy {
	count: number,
	type: string,
	magic?: string // optional
}

let dog = {} as CatArmy;
dog.count


// Function
let fightRobotArmy2 = (robots: RobotArmy): void => {
	console.log('FIGHT!')
}

let fightRobotArmy3 = (robots: {count: number, type: string, magic: string}): number => {
	console.log('FIGHT!')
	return 10
}

// Class
class Animal {
	private sing: string = 'rippit'
	constructor(sound: string) {
		this.sing = sound;
	}

	greet(): string {
		return `Hello ${this.sing}`
	}
}
let lion = new Animal('RAAAWWWRRR');
// console.log(lion.sing); // unable to access 
console.log(lion.greet())


// Union
let confused: string | number = 'Twenty'
// let veryConfused: string | number = true won't work
let veryConfused: string | number | boolean = true
