// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
  pizza: number;
  books: number;
  job: number;
}

const txn: TransactionObj = {
  pizza: -10,
  books: -5,
  job: 50,
  movie: -20,
};
console.log(txn);

console.log(txn.pizza);
console.log(txn["pizza"]);

let prop: string = "pizza";
console.log(txn[prop]);

const txnTotal = (txn: TransactionObj): number => {
  let total = 0;
  for (const t in txn) {
    total += txn[t];
  }
  return total;
};
console.log(txnTotal(txn));

// ------------------------------------------
interface Student {
  // [key: string]: string | number | number[];
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "alpha",
  GPA: 8.5,
  classes: [100, 200],
};
// console.log(student.test);

for (const key in student) {
  console.log(`${key} : ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

logStudentKey(student, "name");

// -----------------------------------------

// interface Incomes {
//   [key : string] : number;
// }

type Streams = "salary" | "bonus" | "stocks";

type Incomes = Record<Streams, number>;

const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 100,
  stocks: 150,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof Incomes]);
}
