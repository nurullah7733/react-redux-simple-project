import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const Dispatch = useDispatch();
  const product = useSelector((state) => state.selectedProductReducer);

  const fetchProductDetails = async () => {
    const respose = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("err", err.message));

    Dispatch(selectedProduct(respose.data));
    console.log(respose);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => Dispatch(removeSelectedProduct());
  }, []);
  return Object.keys(product).length === 0 ? (
    <h4>Loading........</h4>
  ) : (
    <div className="col-md-4 offset-md-3">
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
          <h3 className="card-title">{product.title}</h3>
          <div className="card-title">{product.description}</div>
          <h3>${product.price}</h3>
          <p className="card-text">{product.category}</p>
          <a href="javascript.avoid()" className="btn btn-primary">
            Go to Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
