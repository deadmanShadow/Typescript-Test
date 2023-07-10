  // class implements interface
  interface UserFormatter {
    formatUser: () => string;
  }

    export class User implements UserFormatter {
      constructor(private fullName: string, private age: number) {}

      formatUser = () => {
        return `name: ${this.fullName}, age: ${this.age}`;
      };
    }

    let user = new User("Mr. Potato", 32);
    console.log(user);
    console.log(user.formatUser());
  ```

## 8. Interface vs type

- both are nearly similar in most cases.
- However, Adding new filed after creation is possible for an interface but not possible for a type.

### Example 1

```
    interface Color {
      title: string;
    }
    interface Color {
      text: string;
    }
    // now class A has access to title and string
    class A implements Color {
      title: string;
      text: string;
    }
```
- both can be extended
### Example 2

```
interface IFUser {
  name: string;
}

interface IFStudent extends IFUser {
  student_id: string;
}

// Extending a type via intersections
type User = {
  name: string;
};

type Student = User & {
  student_id: string;
};

let s1: Student;
s1 = {
  name: "anisul islam",
  student_id: "1302",
};
```

### Example 3

```
interface IFUser {
  name: string;
}

interface IFStudent extends IFUser {
  student_id: string;
}

class Student implements IFStudent {
  name: string;
  student_id: string;

  constructor(name, student_id) {
    this.name = name;
    this.student_id = student_id;
  }

  printDetails = () => {
    return `${this.name}, ${this.student_id}`;
  };
}

const s1 = new Student("anisul islam", "1302020017");
console.log(s1.printDetails());

```

## 9. tsconfig

- create src, public folder
- Inside public folder create index.html, style.css and inside src folder create index.ts or other ts files
- in terminal -> tsc --init
- edit tsconfig.json as shown in the following example

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./public",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["./src"],
  "files": ["./src/index.ts", "./src/app.ts"]
}