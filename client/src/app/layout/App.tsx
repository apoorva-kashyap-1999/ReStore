import { useEffect, useState } from "react";
import { Product } from "../../app/models/products";
import { Catalog } from "../features/catalog/Catalog";
import { Typography } from "@mui/material";
function App() {

  const [products, setProducts] = useState<Product[]>([]);
   
  useEffect(()=>{
     fetch('http://localhost:5000/api/products').then(response=> response.json()).then(data=>setProducts(data))
  },[]);


  function addProducts() {
    setProducts(prevState => [...prevState, {id:prevState.length+101, name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100, brand:'Some brand', description:' Some desc', pictureUrl:'http://picsum.photos/200' }])
  }

  return (
    <div className='app'>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProducts={addProducts}/>
    </div>
  );
}

export default App;