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

  const deleteNestedList = () => {
    const newTodos = [...todos];
    return newTodos.forEach((todo) => {
      todo.nested = todo.nested.filter((nested) => nested.complete === false);
    });
    // setTodos(newTodos);
  };

  const deleteTodo = () => {
    setTodos(() => {
      const updatedTodos = newTodoComplete();
      deleteNestedList();
      return updatedTodos;
    });
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h3>Great, Your Todo list Is Empty</h3>
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
          <button
            id="delete"
            onClick={function(event) {
              deleteTodo();
              // deleteNestedList();
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
