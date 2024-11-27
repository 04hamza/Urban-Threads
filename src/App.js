
import React from "react";
import Home from "./SetWeb/Home";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./SetWeb/Navbar";
import Categories from "./SetWeb/Categories";
import Banner from "./SetWeb/Banner";
import Footer from "./SetWeb/Footer";
import Afficher from "./SetWeb/Afficher";
import Card from "./SetWeb/Card";
import Mycard from "./SetWeb/MyCard";
import MyAccount from "./SetWeb/MyAccount";
import Read from "./SetWeb/Read";
import Delete from "./SetWeb/Delete";




const App=()=> {
  return (
    <Router>
           <Navbar/>
          <Categories/>
          <Banner/>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="category/:category" element={<Afficher/>}></Route>
         <Route path="category/:category/:id" element={<Card/>}></Route>
          <Route path="/My Cart" element={<Mycard/>}></Route>
          <Route path="MyAccount" element={<MyAccount/>}></Route>
         <Route path="Dashboard/read" element={<Read/>}></Route>
          <Route path="Dashboard/delete" element={<Delete/>}></Route>
          </Routes>
         <Footer/>
    </Router>
  );
}

export default App;

