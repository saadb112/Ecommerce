// import logo from './logo.svg';
import Navbar from "./components/navbar";
import "./App.css";
import "./responsive.css";
import AddItem from "./components/AddItem";
import Buy from "./components/buy";
import DeleteItem from "./components/deleteItem"
// import { useEffect } from "react";
import ProductPage from "./components/ProductDetail";
  import Product from "./components/CategoryPage";
import Home from "./components/home";
import React, { useState, useEffect } from "react";
import axios from "./axios";
import Footer from "./components/footer";
import Category from "./components/Category"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/").then((response) => {
      setProducts(response.data);
    });
  }, []);
console.log(Products)
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home arr={Products} />} />
          <Route exact path="/:category" element={<Product arr={Products} />} />
          <Route exact path="/additem" element={<AddItem />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/buy" element={<Buy />} />
          <Route exact path="/deleteitem" element={<DeleteItem arr={Products}/>} />
          <Route exact path="/product:id" element={<ProductPage Products={Products} />}
/>
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
