import React from "react";
import { Link } from "react-router-dom";
import productsData from "./productsData";
import "./Products.css";

const Products = () => {
  const products = productsData.map((product) => {
    return (
      <div key={product.id} className="product">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">{products}</div>
    </div>
  );
};

export default Products;




/*import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';
import './Products.css';

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id} className="product">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">{products}</div>
    </div>
  );
};

export default Products;*/


/*import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';
import './Products.css';

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id} className="product">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">{products}</div>
    </div>
  );
};

export default Products;*/





/*import React from 'react';
import { Link } from 'react-router-dom';
import productsData from './productsData';
import './Products.css';


const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id} className="product">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Products Page</h1>
      </div>
      <div className="products-grid">
        {products}
      </div>
    </div>
  );
};



export default Products;*/





/*import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id} className="product">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
      gridGap: "20px" 
    }}>
      <h1>Products Page</h1>
      {products}
    </div>
  );
};

export default Products;*/





/*import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";


const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p>Price: ${product.price}</p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Products Page</h1>
      {products}
    </>
  );
};

export default Products;*/

/*import React, { useEffect, useState } from 'react'
import client from '../../utils/network'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // get request for all products
    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await client.allProducts();
            setProducts(response.data)
        } catch (error) {
            setError(JSON.stringify(error.response.data))
        }
        setLoading(false)
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    
  return (
    <div>Products</div>
  )
}

export default Products*/




