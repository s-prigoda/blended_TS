const user: User = { id: "1", name: "Charlie", age: 25, active: true };

interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

const oldUser: User = {
  ...user,
  id: "3",
  name: "Alice",
  age: 20,
};
console.log(oldUser);

const newUser: User = {
  ...user,
  id: "4",
};

console.log(newUser);
