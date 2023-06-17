import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

export default function List() {
  const [todos, setTodos] = useContext(DataContext);

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.enum === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.enum === id) {
        todo.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="list">
        <ul>
          {todos.map((todo, index) => (
            <ListItem
              todo={todo}
              key={index}
              id={todo.enum}
              checkComplete={switchComplete}
              handleEditTodos={handleEditTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
