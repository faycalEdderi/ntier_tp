import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePublications from "./Components/Publication/AddPublication";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/publications' element={<CreatePublications />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
