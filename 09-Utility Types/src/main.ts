// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "abc123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 90 }));
const assignGrade: Assignment = updateAssignment(assign1, { grade: 90 });

// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};
const assignVerified: Readonly<Assignment> = { ...assignGrade, verified: true };
recordAssignment({ ...assignGrade, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "alpha" | "guest";
type LetterGrade = "A" | "B" | "C" | "D" | "U";
const finalGrades: Record<Students, LetterGrade> = {
  alpha: "A",
  guest: "D",
};
console.log(finalGrades);

interface Grades {
  assign1: number;
  assign2: number;
}
const gradeData: Record<Students, Grades> = {
  alpha: { assign1: 85, assign2: 90 },
  guest: { assign1: 80, assign2: 35 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "abc",
  grade: 90,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "abc",
  title: "Project",
};

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrade, "U">;
type highGrades = Extract<LetterGrade, "A" | "B">;

// NonNullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType
// type newAssign = { title: string; points: number };
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;
const tsAssign: NewAssign = createNewAssign("utility types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with ReturnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
