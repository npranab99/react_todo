import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [todos, setTodos] = useState([
    // {
    //   name: "cooking",
    //   complete: false,
    //   nested: [
    //     { name: "Chicken kosa", complete: false },
    //     { name: "Butter Nun", complete: false },
    //   ],
    // },
    // {
    //   name: "Playing",
    //   complete: false,
    //   nested: [
    //     { name: "Cricked", complete: false },
    //     { name: "FootBall", complete: false },
    //     { name: "FBasketBall", complete: false },
    //   ],
    // },
  ]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <DataContext.Provider value={[todos, setTodos]}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};
