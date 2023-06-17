import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
      todo.nested.forEach((todo2) => {
        todo2.complete = !checkAll;
      });
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodoComplete = () => {
    return todos.filter((todo) => todo.complete === false);
  };

  //delete nested task
  // const newTodoComplete2 = () => {
  //   const R = todos.filter((todo) => {
  //    / todo.nested.filter((e) => e.complete === false);
  //   });
  //   setTodos(R);
  // };

  const deleteTodo = () => {
    setTodos(newTodoComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h3>Your Todo list Is Empty</h3>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkBox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            All
          </label>
          <p>You have {newTodoComplete().length} task to do</p>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
