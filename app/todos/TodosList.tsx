import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todo: Todo[] = await res.json();
  console.log('This is the todo', todo);
  return todo;
};
async function TodosList() {
  const todos = await fetchTodos();
  //console.log(Array.isArray(todos));
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>Todo : {todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosList;
