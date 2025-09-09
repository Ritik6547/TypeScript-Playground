let myName: string = "alpha";
let age: number;
let canVote: boolean;
let hobby: any;

myName = "ritik";
age = 22;
canVote = true;
hobby = "coding";

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(20, 10));

// Union Types
let id: string | number;
let isActive: number | boolean;

id = 75;
isActive = true;

let re: RegExp = /\w+/g;
