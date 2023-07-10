class User {
    // properties, methods, constructor
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    display(): void {
      console.log(`username: ${this.userName}, age: ${this.age}`);
    }
  }
  
  let user1 = new User("Raihan Shamil", 24);
  user1.display();
  
  let user2 = new User("achol", 31);
  user2.display();