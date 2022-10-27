import React, { useState } from "react";

const pageProducts = 'products';
const pageCart = 'cart';


function Shop() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  const [products] = useState([
    {
      name: "mobile",
      price: 20000,
      color:'white'
    },
    {
      name: "tv",
      price: 30000,
      color:'black'
    },
    {
      name: "fridge",
      price: 40000,
      color:'blue'
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const navigteTo = (nextPage) => {
    setPage(nextPage);
  }

 const renderProduct = () =>(
  <div>
  <h1>products</h1>
  <div className="products">
  {products.map((product, index) => (
    <div className="product" key={index}>
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <h5>{product.color}</h5>
      <button onClick={() =>addToCart(product)}>add to cart</button>
    </div>
  ))}
  </div>
  </div>
 );
   const renderCart = () => (
    <div>
    <h1>cart</h1>
    <div className="products">
    {cart.map((product, index) => (
      <div className="product" key={index}>
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <h5>{product.color}</h5>
      </div>
    ))}
    </div>
    </div>
   );


  return (
    <div className="App">
      <header>
        <button onClick={() => navigteTo(pageCart)}>go to cart ({cart.length})</button>
        <button onClick={() => navigteTo(pageProducts)}>view products</button>
      </header>
      {page === pageProducts && renderProduct()};
      {page === pageCart && renderCart()};
    </div>
    
  );
}

export default Shop;
