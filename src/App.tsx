import React, {useState} from 'react';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import { Login } from './components/pages/Login';
import { Admin } from "./components/pages/Admin";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<h1>Conferr root page</h1>}/>
      <Route path="/login" element={Login}/>
      <Route path="/admin" element={Admin}/>
    </Routes>
  </Router>;
}

export default App;
