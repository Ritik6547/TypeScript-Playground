// --------------------- Generics in functions ----------------------
const echo = <T>(arg: T): T => arg;
console.log(echo("hello"));
console.log(echo(12));

function getArray<T>(items: T[]): T[] {
  return [...items];
}
const numArr = getArray([1, 2, 3]);
const strArr = getArray(["a", "b", "c"]);

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("alpha"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "bob" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("alpha"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "alpha" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// --------------- Generic with interface ---------------
interface BoolCheck<T> {
  value: T;
  is: boolean;
}
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// ------------------Generic Constraints-----------------
interface Lengthwise {
  length: number;
}
const logLength = <T extends Lengthwise>(arg: T): void => {
  console.log(arg.length);
};
logLength("hello");
logLength([1, 2, 3]);
// logLength(50);

interface HasID {
  id: number;
}
const processUser = <T extends HasID>(user: T): T => {
  return user;
};
console.log(processUser({ id: 1, name: "alpha" }));
// console.log(processUser({ name: "alpha" }));

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(users, "username"));
console.log(getUsersProperty(users, "email"));

// -------------------- Generics with class --------------------
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  public get state(): T {
    return this.data;
  }

  public set state(value: T) {
    this.data = value;
  }
}
const store = new StateObject("alpha");
console.log(store.state);
store.state = "ritik";
// store.state = 20;

const myState = new StateObject<(string | number | boolean)[]>([12]);
console.log(myState.state);
myState.state = [true, 45];
myState.state = ["guest", false];
