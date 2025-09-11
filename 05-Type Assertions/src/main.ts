type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"World";
let e = <string | number>"World";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myStr: string = addOrConcat(2, 2, "concat") as string;
let myVal: number = addOrConcat(2, 2, "add") as number;

// string will be returned but we are storing in number
let res: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
10 as unknown as string;

// DOM
const img = document.querySelector("#img");
const myImg = document.getElementById("img") as HTMLImageElement;
const htmlImg = document.querySelector("img")!;

htmlImg.src;
myImg.src;
