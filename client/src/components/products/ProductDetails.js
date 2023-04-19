import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "../products/productsData";
import Cart from "./Cart";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === Number(productId));

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  const handleViewCart = () => {
    navigate("/cart");
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details-container">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        <button className="view-cart-button" onClick={handleViewCart}>View Cart</button>
      </div>
      <div className="cart-info-container">
        <p>{cart.length} items in cart</p>
      </div>
    </div>
  );
};

export default ProductDetail;







/*import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../products/ProductsData";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === Number(productId));

  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-details-container">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div className="cart-info-container">
        <p>{cart.length} items in cart</p>
      </div>
    </div>
  );
};

export default ProductDetail;*/



/*import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../products/ProductsData";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === Number(productId));

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;*/







/*import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "./productsData";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productsData.find(prod => prod.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;*/





/*import React from "react"
import { useParams } from "react-router-dom"
import productsData from "./productsData"

function ProductDetail() {
  const { productId } = useParams()
  const thisProduct = productsData.find(prod => prod.id === productId)

  if (!thisProduct) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <h1>{thisProduct.name}</h1>
      <p>Price: ${thisProduct.price}</p>
      <p>{thisProduct.description}</p>
    </div>
  )
}

export default ProductDetail*/




/*import React from "react"
import {useParams} from "react-router-dom"
import productsData from './productsData';

function ProductDetail() {
    const { productId } = useParams();
    const thisProduct = productsData.find((prod) => prod.id === productId);
  
    if (!thisProduct) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h1>{thisProduct.name}</h1>
        <p>Price: ${thisProduct.price}</p>
        <p>{thisProduct.description}</p>
      </div>
    );
  }
  
export default ProductDetail*/






/*function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail*/