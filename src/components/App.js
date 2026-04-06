import React from "react";
import "./../styles/App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: 800,
      description: "Apple phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Samsung S21",
      price: 700,
      description: "Samsung phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "OnePlus 9",
      price: 600,
      description: "OnePlus phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Pixel 6",
      price: 650,
      description: "Google phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Nokia X",
      price: 400,
      description: "Nokia phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Moto G",
      price: 300,
      description: "Motorola phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Realme X",
      price: 350,
      description: "Realme phone",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Redmi Note",
      price: 250,
      description: "Xiaomi phone",
      image: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} setProducts={setProducts} />} />
        <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
      </Routes>
    </div>
  );
}

export default App;
