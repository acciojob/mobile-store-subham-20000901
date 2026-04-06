import React from "react";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductDetails({products,setProducts}) {
  const {id} = useParams();
   const navigate = useNavigate();

   

  const product = products.find(
    (p) => p.id === parseInt(id)
);

 const [price, setPrice] = useState(product ? product.price : "");

 if(!product) {
    return <h2>No product found</h2>
}


  const handleSave = () => {
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, price: Number(price) } : p
      )
    );
  };
return (
    <>
     <h2>{product.name}</h2>
     <img src={product.image} alt={product.name} width="200" />
     <p>{product.description}</p>
      
      <input
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button className="float-right" onClick={handleSave}>
        Save
      </button>

      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>

    </>
)
}

export default ProductDetails;