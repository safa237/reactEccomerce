import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../rtk/slices/Product-slice";
import { Col, Container , Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { addToCart } from "../rtk/slices/Cart-slice";
import './Product.css';
import '../sea';
function Search() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
  
    const handleChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    return (
      <section id="product1">
        <div className="features text-center pt-5 pb-5">
          <div className="container">
            <form>
              <input
                type="text"
                name=""
                id="search-item"
                placeholder="search product"
                onKeyUp={handleChange}
              />
            </form>
            <div className="row">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-6 col-lg-3">
                  <div className="feat">
                    <div className="contentCenter">
                      <div className="icon-holder position-relative">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <h5 className="mb-3 mt-3 ">
                        {product.title.substring(0, 25)}...
                        <Link to={`/product/${product.id}`}>See details</Link>
                      </h5>
                      <h3>{product.price}$</h3>
                      <Button
                        variant="primary"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default Search;