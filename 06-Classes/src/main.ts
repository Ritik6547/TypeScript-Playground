class User {
  constructor(
    public readonly name: string,
    public email: string,
    private age: number,
    protected city: string = "delhi"
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.city = city;
  }

  public getAge() {
    return this.age;
  }
}

const user1 = new User("alpha", "test@gmail.com", 22, "banglore");
const user2 = new User("ritik", "ritik@gmail.com", 20);

// console.log(user1.getAge());

class Insta extends User {
  constructor(public id: string, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  public getCity() {
    return this.city;
  }
}

const instaUser1 = new Insta("op__alpha", "test", "test@gmail.com", 80);
// console.log(instaUser1.getCity());

// -------- interface --------
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  public play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const g1 = new Guitarist("Alpha", "guitar");
console.log(g1.play("strums"));

// ---------- static keyword ------------
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const guest = new Peeps("guest");
const alpha = new Peeps("alpha");
const ritik = new Peeps("ritik");

console.log(guest.id);
console.log(alpha.id);
console.log(ritik.id);
console.log(Peeps.count);

// ------------ Getters and Setters ------------
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["a", "b", "c", "d"];
console.log(myBands.data);
