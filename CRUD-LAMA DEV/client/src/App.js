import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Pages/Books";
import Add from "./Pages/Add";
import Update from "./Pages/Update";
import "../src/style.css"

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/update" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
