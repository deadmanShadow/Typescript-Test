// make components reusable
// make components flexible
// C# and java have this generic feature
// generic allows us to create own types

const displayValue1 = (x) => {
    return x;
  };
  // no auto suggestion for any type
  // displayValue1(20).;
  
  const displayValue2 = <T>(x: T): T => {
    return x;
  };
  // now we will have auto suggestion
  // displayValue2(20).
  
  const addBefore = <T1>(numbers: T1[], x: T1) => {
    return [x, ...numbers];
  };
  
  let numbers = [20, 30, 40];
  console.log(addBefore(numbers, 10));
  
  let countries = ["bangladesh", "pakistan", "India"];
  console.log(addBefore(countries, "Australia"));
  
  // Another example
  const printUserInfo = <X, Y>(userId: X, userAge: Y) => {
    console.log(`ID : ${userId}, Age: ${userAge}`);
  };
  printUserInfo("101", 32);
  printUserInfo(101, 32);
  printUserInfo(101, "32");
  printUserInfo("101", "32");