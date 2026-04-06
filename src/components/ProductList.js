import React from "react";
import { Link } from "react-router-dom";

function ProductList({products}){
  return (
    <>
      <h2>products</h2>
      
      {products.map((product)=> (
        <Link key={product.id} to={`products/${product.id}`}>
         {product.name} <button className="btn">Buy</button>
        </Link>
      ))}
    
    </>
  )
}

export default ProductList;