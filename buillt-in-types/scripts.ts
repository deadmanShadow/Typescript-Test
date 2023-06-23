//typescript can understand the declaration type and value
let myName = "Shamil";
myName = "babu";
console.log(typeof myName);

// but when we don't assign anything it will not give us error
let country;
country = "Bangladesh";
country = 354;
console.log(country);

//type declaring
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(20, 10));

// array

const fruits = ["banana", "apple", "mango", 120];
fruits.push("guava"); // valid
fruits.push(120); // valid
// fruits.push(false); // not valid

// object
const person = {
  name: "Shamil",
  age: 21,
  isSmart: true,
};
person.name = "Raihan";
person.age = 22;
// person.Newage = 25; //not valid

// Explicitly declare
let a: string;
a = "Shamil";

let b: number;
b = 20;

let c: boolean;
c = false;

// array
let numbers: number[] = [];
let names: string[] = [];
names.push("Shamil");
numbers.push(10);

let mixed: (number | string)[] = [];
mixed.push(10);
mixed.push("hello");

console.log(numbers, names, mixed);

// for variable
let myVar: number | string;
myVar = 10;
myVar = "Shamil";
console.log(myVar);

// object

let Myobj: object;
Myobj = {
  name: "Shamil",
  age: 21,
  isFunny: true,
};
console.log(Myobj);

let MyObj2: object = {
  name: "Shamil",
  age: 22,
};
console.log(MyObj2);

let myObj3: {
  name: string;
  age: number;
  isSmart: boolean;
};
myObj3 = {
  name: "Shamil",
  age: 21,
  isSmart: true,
};
console.log(myObj3);

// array is an object too

let arrObj: object;
arrObj = [10, 20, 30];

// Dynamic / Any type

let first: any;
first = 10;
first = "Hello";

let myArrOfAnny: any[] = [];
myArrOfAnny.push("hello");
myArrOfAnny.push(96);
myArrOfAnny.push(false);

let firstObject: {
  name: any;
  age: any;
};
firstObject = {
  name: "Shamil",
  age: 22,
};

// function type
let myfun: Function;
myfun = () => {
  //   console.log("Hello");
};

const myFun = (a: string, b: string, c: number): string => {
  //   console.log(`Hello ${a} ${b} and ${c} ${d}`);
  return a + b + c;
};

const result = myFun("Hello", "Bangladesh", 20);
console.log(result);