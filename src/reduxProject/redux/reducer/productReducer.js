import { ActionTypes } from "../content/action-types";

const initialstate = {
  products: [],
};

export const ProductReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.set_products:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.selected_product:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.remove_selected_product:
      return {};

    default:
      return state;
  }
};
