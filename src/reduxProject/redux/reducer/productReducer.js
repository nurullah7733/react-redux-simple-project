import { ActionTypes } from "../content/action-types";

const initialstate = {
  product: [
    {
      id: 1,
      title: "nurullah",
      category: "programer",
    },
  ],
};

export const ProductReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.set_products:
      return state;

    default:
      return state;
  }
};
