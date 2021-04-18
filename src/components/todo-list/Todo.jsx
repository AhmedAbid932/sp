import React from "react";
import TodoList from "./Todo-List";

const Todo = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoList
          text={todo.text}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </>
  );
};

export default Todo;
