import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import { createBrowserHistory } from "history";
import FavDogsPage from "./Pages/FavDogsPage/FavDogsPage";

const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/favaourite" element={<FavDogsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
