import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import httpRequest from "./userReducer";

export default combineReducers({
  counterReducer,
  httpRequest,
});
