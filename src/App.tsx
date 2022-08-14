import React from 'react';
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import './App.css';
import ToDoList from './pages/ToDoList';
import ToDoMenu from "./pages/ToDoMenu";
import ToDoAdd from "./pages/ToDoAdd";

function App() {
  return (
      <HashRouter>
        <Routes>
            <Route path="/" element={<ToDoMenu />}>
            <Route index element={<ToDoList />} />
            <Route path="add" element={<ToDoAdd />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;
