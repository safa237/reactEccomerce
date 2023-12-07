import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);


  return (
    <section id="details">
    <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.image} alt={product.title}height="300px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <p className="lead">{product.description}</p>

                    <h2 className="my-4">{product.price}$</h2>
                    
                </div>
            </div>
        </div>
        </section>
  );
}

export default ProductDetails;
