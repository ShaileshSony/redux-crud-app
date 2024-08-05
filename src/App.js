import React from "react";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Read/>}/>  
        <Route exact path="/create" element={<Create/>}/>  
        <Route exact path="/edit/:id" element={<Update/>}/>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
