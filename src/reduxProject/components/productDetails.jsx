import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.selectedProductReducer);
  const { productId } = useParams();
  const Dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      const respose = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => console.log("err", err.message));

      Dispatch(selectedProduct(respose.data));
      console.log(respose);
    };
    fetchProductDetails();
    return () => Dispatch(removeSelectedProduct());
  }, [Dispatch, productId]);
  return Object.keys(product).length === 0 ? (
    <h3>....Loading</h3>
  ) : (
    <div>
      <div
        className="card border border-primary"
        style={{ marginBottom: "10px", flexDirection: "inherit" }}
      >
        <div>
          <img
            className="card-img-top "
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <div className="card-title">{product.description}</div>
          <h3>${product.price}</h3>
          <p className="card-text">{product.category}</p>
          <a href="javascript.avoid()" className="btn btn-success">
            Add to Card
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
