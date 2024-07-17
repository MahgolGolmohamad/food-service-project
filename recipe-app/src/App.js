import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Foods from "./components/Foods";
import { Category } from "./components/Category";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Main></Main>
      <Cards></Cards>
      <Foods></Foods>
      <Category></Category>


      </div>
  );
}

export default App;
