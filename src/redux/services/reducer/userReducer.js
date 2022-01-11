import {
  users_request,
  get_users_success,
  get_users_request_failed,
} from "../types";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default function httpRequest(state = initialState, action) {
  switch (action.type) {
    case users_request:
      return {
        ...state,
        loading: true,
      };

    case get_users_success:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case get_users_request_failed:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
