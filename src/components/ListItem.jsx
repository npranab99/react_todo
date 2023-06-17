import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";
import NestedList from "./NestedList";

export default function ListItem({ todo, id, checkComplete }) {
  const [todos, setTodos] = useContext(DataContext);
  //console.log(todo);
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  //using use state for nested loop
  const [isNested, setIsNested] = useState(false);
  const [addValue, setAddValue] = useState("");

  const [showNested, setShowNested] = useState(false);
  const x = Math.floor(Math.random() * 1000 + 1);

  const handleOnEdit = () => {
    setOnEdit(true);
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

  const handleOnSave = () => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  //handeling event for nested todo

  const handleAdd = () => {
    setIsNested(true);
  };

  const showNest = () => {
    setShowNested(true);
  };
  const hideNest = () => {
    setShowNested(false);
  };

  const createNastedLsit = () => {
    setIsNested(false);
    if (addValue) {
      handleAddTodos(addValue, id);
    } else {
      alert("field is empty");
    }
  };

  const handleAddTodos = (addValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.enum === id) {
        let ptr = { name: addValue, complete: false, enum: x };
        todo.nested.push(ptr);
      }
    });
    setTodos(newTodos);
    setAddValue("");
  };

  const newTodoComplete2 = () => {
    return todo.nested.filter((e) => e.complete === false);
  };

  return (
    <>
      {onEdit && (
        <div>
          <li className="ul_li">
            <input
              className="todo_input"
              type="text"
              id="editValue"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value.toLowerCase())}
            />

            <button
              className="btn_save"
              disabled={todo.complete}
              onClick={handleOnSave}
            >
              <img
                className="btn_image_save"
                src="https://cdn-icons-png.flaticon.com/128/4562/4562635.png"
              />
            </button>
          </li>
        </div>
      )}

      {!onEdit && (
        <div>
          <li className="ul_li">
            <div className="list_parent">
              <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input
                  type="checkbox"
                  id={id}
                  checked={todo.complete}
                  onChange={() => checkComplete(id)}
                />
                {todo.name}
              </label>
              <p>{newTodoComplete2().length}</p>
              <div>
                {!showNested && (
                  <button
                    className="btn_span"
                    disabled={todo.complete}
                    onClick={showNest}
                  >
                    <img
                      className="btn_image"
                      src="https://cdn-icons-png.flaticon.com/128/8639/8639799.png"
                    />
                  </button>
                )}
                {showNested && (
                  <button
                    className="btn_span"
                    disabled={todo.complete}
                    onClick={hideNest}
                  >
                    <img
                      className="btn_image"
                      src="https://cdn-icons-png.flaticon.com/128/7344/7344861.png"
                    />
                  </button>
                )}
              </div>

              <button
                className="btn_edit"
                disabled={todo.complete}
                onClick={handleOnEdit}
              >
                <img
                  className="btn_image"
                  src="https://cdn-icons-png.flaticon.com/128/1160/1160758.png"
                />
              </button>
              <button
                className="btn_add"
                onClick={handleAdd}
                disabled={todo.complete}
              >
                <img
                  className="btn_image"
                  src="https://cdn-icons-png.flaticon.com/128/2040/2040525.png"
                />
              </button>
            </div>
          </li>
        </div>
      )}

      {isNested && (
        <div>
          <form className="form" autoComplete="off" onSubmit={createNastedLsit}>
            <input
              className="form_input"
              type="text"
              placeholder="Sub list"
              value={addValue}
              required
              onChange={(e) => setAddValue(e.target.value.toLocaleLowerCase())}
            />
            <button className="button_create" type="submit">
              Create
            </button>
          </form>
        </div>
      )}

      {showNested &&
        todo.nested.map((todo2, index2) => (
          <NestedList todo={todo} todo2={todo2} key={index2} id={todo2.enum} />
        ))}
    </>
  );
}
