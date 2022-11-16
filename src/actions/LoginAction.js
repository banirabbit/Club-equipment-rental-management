import { axios_instance } from "../utils/axios_instance";
import { getUserInfo } from "./UserAction";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (res) => ({
    type: LOGIN_SUCCESS,
    data: res,
  });

// login user
export function login(formData) {
    return async (dispatch) => {
      try {
        const data = {
          username: formData.username,
          password: formData.password,
        };
        const res = await axios_instance.post("/login", data);
        if (res.data.code === 200) {
          dispatch(loginSuccess(res))
          dispatch(getUserInfo()); 
        } else {
        //   if (res.data.message !== undefined && res.data.message !== null) {
        //     dispatch(loginFailed(res.data.message));
        //   } else {
        //     dispatch(loginFailed("Bad credentials"));
        //   }
        }
      } catch (err) {
       // dispatch(loginFailed(err.response.data.msg));
      }
    };
  }