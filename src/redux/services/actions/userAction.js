import axios from "axios";
import {
  users_request,
  get_users_success,
  get_users_request_failed,
} from "../types";

// export const userList = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: users_request,
//       });
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       console.log(res);
//       dispatch({
//         type: get_users_success,
//         payload: res.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: get_users_request_failed,
//         payload: error.message,
//       });
//     }
//   };
// };
export const userList = () => {
  return (dispatch) => {
    dispatch({
      type: users_request,
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({
          type: get_users_success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: get_users_request_failed,
          payload: err.message,
        });
      });
  };
};
