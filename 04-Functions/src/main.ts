// Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Post = {
  id: number;
  name?: string;
  data: stringOrNumberArray;
  isActive?: boolean;
};

let val: stringOrNumber = 10;
val = "Ten";

type userId = stringOrNumber;
let user: userId;

// Literal types
let myName: "Alpha";

let userName: "Alpha" | "Ritik" | "Guest";
userName = "Alpha";
userName = "Ritik";
userName = "Guest";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const greet = (username: string): void => {
  console.log(`Hello, ${username}`);
};
greet("ritik");

let subtract = function (a: number, b: number): number {
  return a - b;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (a, b) {
  return a * b;
};

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (!c) {
    return a + b;
  }
  return a + b + c;
};

// default param value
const sumAll = (a: number = 500, b: number, c: number = 10): number => {
  return a + b + c;
};

console.log(sumAll(10, 20, 100));
console.log(sumAll(10, 20));
console.log(sumAll(undefined, 10, 20));

// Rest Parameters
const total = (...nums: number[]): number => {
  return nums.reduce((sum, num) => sum + num, 0);
};

console.log(total(1, 2, 3, 4, 5));

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = (): never => {
  let i: number = 1;
  while (true) {
    i++;
    // if (i === 5) break;
  }
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of never type
const checkNumberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";

  return createError("This should never happen");
};
