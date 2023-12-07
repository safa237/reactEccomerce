import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../rtk/slices/Product-slice";
import { Col, Container , Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { addToCart } from "../rtk/slices/Cart-slice";
import './Product.css';
import ProductsList from "./ProductsList";

function Product() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Update filtered products when products state changes
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Filter products by category when button is clicked
  const filterProducts = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };


  return (
    <>
      <section id="product1">
        <div className="features text-center pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 ">
                <div className="mb-3 ">
                  <Button
                    color="primary"
                    onClick={() => setFilteredProducts(products)}
                    className="mr-3"
                  >
                    All Products
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => filterProducts("men's clothing")}
                    className="mr-3"
                  >
                    men's clothing
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => filterProducts("women's clothing")}
                    className="mr-3"
                  >
                    women's clothing
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => filterProducts("jewelery")}
                    className="mr-3"
                  >
                    jewelery
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => filterProducts("electronics")}
                    className="mr-3"
                  >
                    Electronics
                  </Button>
                 
                </div>
              </div>
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-6 col-lg-3">
                  <div className="feat">
                    <div className="contentCenter">
                      <div className="icon-holder position-relative">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <h5 className="mb-3 mt-3">
                        {product.title.substring(0, 25)}...
                        <Link to={`/product/${product.id}`}>See details</Link>
                      </h5>
                      <h3>{product.price}$</h3>
                      <Button
                        variant="primary"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;