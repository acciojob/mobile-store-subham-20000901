import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function AdminPanel({ products, setProducts }) {
    const navigate = useNavigate();
    const [form,setForm] = useState ({
        name:"",
        description:"",
        image: "",
        price:""
    });

   function handleAdd(){
    const newProduct = {
        id: Date.now(),
        ...form,
        price:Number(form.price)
    };
    setProducts([...products, newProduct]);
   }

    function handleDelete(productToDelete) {
        const newProducts = products.filter((product) => product.id !== productToDelete);
        setProducts(newProducts)
    }

    return (
    <>
     <h2>Admin Panel</h2>
      <input className="form-control" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="form-control" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input className="form-control" placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <input className="form-control" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />

     <button onClick={handleAdd}>Add</button>
    
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`products/${product.id}`}>{product.name}</Link>

          <button onClick={() =>navigate(`/products/${product.id}`)}>Edit</button>

          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default AdminPanel;
