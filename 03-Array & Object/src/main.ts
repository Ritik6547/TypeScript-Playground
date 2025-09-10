let names = ["alpha", "ritik", "beta"];
let fruits = ["mango", "orange", 200];
let arr = ["post", 24, true];

names[0] = "anonymous";
names.push("guest");

fruits[0] = 100;
fruits.push("litchi");

// fruits = names;
// arr = fruits;

let test = [];
test.push(10);
test.push("cat");
test.push(true);

let temp: string[] = [];
temp.push("dog");
temp.push("cat");

// Tuple
let myTuple: [string, number, boolean] = ["alpha", 22, true];
myTuple[0] = "guest";

let myArr = ["ritik", 21, false];

// myTuple = myArr;
myArr = myTuple;

// Objects
let obj: object = {};
console.log(obj);
obj = [];
console.log(obj);

const user = {
  name: "alpha",
  age: 22,
  canDrive: true,
};
console.log(user);

interface Post {
  id: number;
  name?: string;
  data: (string | number)[];
  isActive?: boolean;
}

let post1: Post = {
  id: 1,
  name: "coding",
  data: [20, "Java", 30, 40, "Cpp"],
  isActive: true,
};

let post2: Post = {
  id: 2,
  name: "movies",
  data: [10, "ABC", "DEF"],
};

const logPostName = (post: Post) => {
  if (!post.name) {
    return "Hello!";
  }
  return `Hello ${post.name.toUpperCase()}`;
};

console.log(logPostName(post1));

// Enums
enum Days {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
console.log(Days);
console.log(Days[1]);
console.log(Days.MONDAY);

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

console.log(Role);
const userRole: Role = Role.Admin;
console.log(userRole);
