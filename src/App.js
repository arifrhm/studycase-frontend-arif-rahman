import React from 'react';

import './App.css';
// import Header from './Components/Header/Header';
// import Shop from './Components/Shop/Shop';
import { ThemeProvider } from "@mui/material/styles";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login/Login';
// import Logout from './Components/Logout/Logout';
import Register from './Components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/register" element={<Register />} />
      {/* Rute-rute lainnya */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
