import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function NestedList({ todo, todo2, id, checkComplete }) {
  const [todos, setTodos] = useContext(DataContext);
  //console.log(todo2);
  const [onEdit, setOnEdit] = useState(false);
  const [editValue2, setEditValue2] = useState(todo2.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleEditTodos = (editValue2, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.nested.forEach((todo2) => {
        if (todo2.enum === id) {
          todo2.name = editValue2;
        }
      });
    });
    setTodos(newTodos);
  };

  const handleOnSave = () => {
    setOnEdit(false);
    if (editValue2) {
      handleEditTodos(editValue2, id);
    } else {
      setEditValue2(todo2.name);
    }
  };

  const switchComplete2 = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.nested.forEach((todo2) => {
        if (todo2.enum === id) {
          todo2.complete = !todo2.complete;
        }
      });
    });
    setTodos(newTodos);
  };

  return (
    <>
      {onEdit && (
        <div>
          <li className="list_container_nested">
            <input
              type="text"
              id="editValue"
              value={editValue2}
              onChange={(e) => setEditValue2(e.target.value.toLowerCase())}
            />

            <button
              className="btn_save"
              disabled={todo2.complete}
              onClick={handleOnSave}
            >
              Save
            </button>
          </li>
        </div>
      )}
      {!onEdit && (
        <div>
          <ul>
            <li className="list_container_nested">
              <label
                htmlFor={id}
                className={todo2.complete || todo.complete ? "active" : ""}
              >
                <input
                  type="checkbox"
                  id={id}
                  checked={todo2.complete || todo.complete}
                  onChange={() => switchComplete2(id)}
                />
                {todo2.name}
              </label>

              <button
                disabled={todo2.complete || todo.complete}
                className="btn_edit"
                onClick={handleOnEdit}
              >
                Edit
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
