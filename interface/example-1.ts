// without interface
let users: {
    id: number,
    name: string,
    age: number,
  }[] = [];
  
  let user1: {
    id: number,
    name: string,
    age: number,
  } = {
    id: 1,
    name: "Mr. Potato",
    age: 32,
  };
  
  let user2: {
    id: number,
    name: string,
    age: number,
  } = { id: 2, name: "Ms. Tomato", age: 21 };
  
  users.push(user1);
  users.push(user2);
  
  const printUserInfo = (user: { id: number, name: string, age: number }) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
  };
  
  users.forEach((user) => printUserInfo(user));
  
  // with interface
  interface User {
    id: number;
    name: string;
    age: number;
  }
  
  let users: User[] = [];
  
  let user1: User = { id: 1, name: "Mr. Potato", age: 32 };
  let user2: User = { id: 2, name: "Ms. Tomato", age: 21 };
  
  users.push(user1);
  users.push(user2);
  
  const printUserInfo = (user: User) => {
    console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
  };
  
  users.forEach((user) => printUserInfo(user));