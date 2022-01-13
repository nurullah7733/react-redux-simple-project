import { ActionTypes } from "../content/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.set_products,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.selected_product,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.remove_selected_product,
  };
};
