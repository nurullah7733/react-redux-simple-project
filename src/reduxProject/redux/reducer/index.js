import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";

// const Reducers = combineReducers({
//   ProductReducer,
// });

// export default Reducers;

// export default combineReducers({
//   ProductReducer,
// });

export const rootReducer = combineReducers({
  ProductReducer,
});
