import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.ProductReducer.products);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 d-flex align-items-stretch">
            <Link to={`product/${product.id}`}>
              <div
                className="card border border-primary"
                style={{ marginBottom: "10px" }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "75vh",
                    objectFit: "contain",
                  }}
                  className="card-img-top "
                  src={product.image}
                  alt={product.title}
                />

                <div className="card-body">
                  <div className="card-title">{product.title}</div>
                  <h3>${product.price}</h3>
                  <p className="card-text">{product.category}</p>
                  <a href="javascript.avoid()" className="btn btn-primary">
                    Go to Details
                  </a>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
