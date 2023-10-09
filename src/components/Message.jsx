import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Message() {

 
  const a = () => {
    console.log("a");
  };

  const b = () => {
    console.log("b");
  };
  return (
    <>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/search">search</Link>
      </nav>
      <Router>
        <Routes>
          <Route
            exact
            path="/about"
            element={<h1>Hello I am about section</h1>}
          ></Route>
          <Route
            exact
            path="/"
            element={<h1>Hello I am homet section</h1>}
          ></Route>
          <Route
            exact
            path="/search"
            element={<h1>Hello I am search section</h1>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
