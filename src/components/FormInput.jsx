import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");

  const x = Math.floor(Math.random() * 1000 + 1);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { name: todoName, complete: false, nested: [], enum: x },
    ]);
    setTodoName("");
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          type="text"
          required
          placeholder="What need to be done"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value.toLocaleLowerCase())}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}