import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./product";

const ProductListing = () => {
  const products = useSelector((state) => state.ProductReducer.products);

  const dispatch = useDispatch();
  const fatchProducs = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Err", err.message));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fatchProducs();
  }, []);
  console.log(products);
  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductListing;
