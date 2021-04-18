import React from "react";

const TodoList = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item, e) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="lists">
      <ul>
        <li className={todo.completed ? "completed" : ""}>
          {text}
          <span>
            <i
              className="fas fa-check complete-btn"
              onClick={completeHandler}
            ></i>
            <i className="fas fa-trash trash-btn" onClick={deleteHandler}></i>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
