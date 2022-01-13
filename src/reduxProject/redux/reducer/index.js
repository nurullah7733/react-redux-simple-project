import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer } from "./productReducer";

// const Reducers = combineReducers({
//   ProductReducer,
// });

// export default Reducers;

// export default combineReducers({
//   ProductReducer,
// });

export const rootReducer = combineReducers({
  ProductReducer,
  selectedProductReducer,
});
