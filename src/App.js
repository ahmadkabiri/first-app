import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import "./App.css";

function App() {

  const [products,setProducts] = useState([
    {id:uuidv4() , title:"laptop",price:40},
    {id:uuidv4() , title:"mobile",price:40},
    {id:uuidv4() , title:"Coolpad",price:40},

  ])
 
  return (
    <div>
      <br /><br /><br /><br />
      <ul>
      {
        products.map((product,index) => (
          <li key={product.id}>{index+1}-{product.title}</li>
        ))
      }

      </ul>
    </div>
  );
}

export default App;
