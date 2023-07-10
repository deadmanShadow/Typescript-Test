// false -> 0,NaN,"" (the empty string), 0n (the bigint version of zero), null, undefined
const printAllTodos = (todos: string[] | null) => {
    if (todos) {
      todos.map((todo) => console.log(todo));
    } else {
      console.log("todos are empty");
    }
  };
  
  const todos1 = null;
  const todos2 = ["todo1", "todo2", "todo3"];
  printAllTodos(todos1);
  printAllTodos(todos2);