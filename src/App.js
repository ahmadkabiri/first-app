
import "./App.css"
import Product from "./product/Product";
function App() {


  const allProducts = [
    {id : 1, name : "react.js course" , price:200 , src:"logo512.png" , count:12 },
    {id : 2, name : "node.js course" , price:176 , src:"index.png" , count:10 },
    {id : 3, name : "js course" , price:243 , src:"js.png" , count:15 },

  ]

  return (
    <div className="container">
      <Product {...allProducts[0]}></Product>
      <Product {...allProducts[1]}></Product>
      <Product {...allProducts[2]}></Product>
    </div>
  );
}

export default App;
