import React from "react";
import FormInput from "./FormInput";
import List from "./List";
import Footer from "./Footer";
import { DataProvider } from "./DataProvider";
import Header from "./Header";

export default function DashBoard() {
  return (
    <>
      <DataProvider>
        <div className="App">
          <Header />
          <h2>To Do List</h2>
          <FormInput />
          <List />
          <Footer />
        </div>
      </DataProvider>
    </>
  );
}
