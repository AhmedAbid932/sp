import Fab from "@material-ui/core/Fab";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import "./index.css";
import Todo from "./Todo";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  return (
    <>
      <header>
        <h1>Todo List</h1>
        <small>Hope Your Day Will Awesome</small>
      </header>
      <form autoComplete="off" onSubmit={formHandler}>
        <FormControl>
          <InputLabel htmlFor="component-simple">Your Todo</InputLabel>
          <Input
            id="component-simple"
            placeholder="Write Here"
            onChange={inputTextHandler}
            value={inputText}
          />
        </FormControl>
        <Fab
          color="primary"
          aria-label="add"
          className="texty"
          onClick={formHandler}
        >
          <AddIcon />
        </Fab>
      </form>
      <Todo setTodos={setTodos} todos={todos} />
    </>
  );
};

export default TodoApp;
