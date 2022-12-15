import { axios_instance } from "../utils/axios_instance";
import { getUserInfo } from "./UserAction";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";
export const RESETPASS = "RESETPASS";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const LOGIN_FAILED_CLEAR = "LOGIN_FAILED_CLEAR";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const loginSuccess = (res) => ({
  type: LOGIN_SUCCESS,
  data: res,
});

export const clear = () => ({
  type: CLEAR_LOGIN,
});

export const loginFailedClear = () => ({
  type: LOGIN_FAILED_CLEAR,
});
export const loginFailed = (errMsg) => ({
  type: LOGIN_FAILED,
  data: errMsg,
});

// login user
export function login(formData) {
  return async (dispatch) => {
    try {
      const data = {
        username: formData.username,
        password: formData.password,
        "remember-me": formData.remember_me,
      };
      const res = await axios_instance.post("/login", data);
      if (res.data.code === 200) {
        dispatch(getUserInfo());
        dispatch(loginSuccess(res));      
        dispatch({ type: LOGIN_ACCOUNT, data: formData.username });
        localStorage.setItem("account", formData.username);
      } else {
          if (res.data.message !== undefined && res.data.message !== null) {
            console.log(res.data.message, "77777777777"); 
            dispatch(loginFailed(res.data.message));
          } else {
            dispatch(loginFailed("Bad credentials"));
          }
      }
    } catch (err) {
      dispatch(loginFailed(err.response.data.msg));
    }
  };
}

//logout
export function logout() {
  return async (dispatch) => {
    try {
      const result = await axios_instance.post("/logout");
      if (result.data.code === 200) {
        dispatch({ type: LOGOUT });
      }
    } catch (err) {}
  };
}

// first time login reset password
export function resetPassFirstTime(id, password) {
  return async (dispatch) => {
    try {
      const result = await axios_instance.post(
        "/user/resetPassword",
        {
          userId: id,
          password: password,
        },
        {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        }
      );
      if (result.data.code === 200) {
        dispatch({ type: RESETPASS, data: true });
      } else {
        dispatch({ type: RESETPASS, data: false });
      }
    } catch (err) {
      dispatch({ type: RESETPASS, data: err.response.data.msg });
    }
  };
}
