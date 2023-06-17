import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Registration from "./components/Registration";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoard from "./components/DashBoard";
import Page404 from "./components/Page404";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    try {
      const user = await axios.get(URL);
      setData(user.data);
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Page404 />}></Route>
          <Route path="/" element={<Login />}></Route>
          {data.map((fname, index) => {
            const name = fname.username;
            return (
              <Route
                key={index}
                path={`/login/${name}`}
                element={<ProtectedRoute Component={DashBoard} />}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
