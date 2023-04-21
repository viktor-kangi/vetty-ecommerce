import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/products/Home";
import Products from "./components/products/Products";
import ProductDetail from './components/products/ProductDetails'
import Cart from './components/products/Cart'



function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '' }}>
        <nav>
          <Link to="/" style={{ marginRight: "30px" }}>Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


/*import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/products/Home";
import Products from "./components/products/Products";
import ProductDetail from './components/products/ProductDetails'
import Cart from './components/products/Cart'

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '' }}>
        <nav>
          <Link to="/" style={{ marginRight: "30px" }}>Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;*/







/*import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/products/Home";
import Products from "./components/products/Products";
import ProductDetail from './components/products/ProductDetails'

function App() {
  return (
    <div style={{ backgroundColor: '' }}>
      <nav>
        <Link to="/" style={{ marginRight: "30px" }}>Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes >
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route exact path="/" element={<Home />} />
      </Routes >
    </div>
  );
}

export default App;*/















