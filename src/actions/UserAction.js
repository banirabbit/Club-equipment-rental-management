import { axios_instance } from "../utils/axios_instance";
import { setErrorSnackbarMessageAndOpen } from "./SnackbarAction";
export const GET_USER_INFO = "GET_USER_INFO";
export const CREATE_USER = "CREATE_USER";
export const SET_USERLIST = "SET_USERLIST";
export const GET_DELETE = "GET_DELETE";

//Get user information
export function getUserInfo() {
    return async (dispatch) => {
      try {
        const result = await axios_instance.get("/user/profile", {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        });
        localStorage.setItem("userInfo", result.data); // 储存到local里面减少网络请求
        console.log(result.data, "3333")
        dispatch({ type: GET_USER_INFO, data: result.data });
      } catch (err) {
        console.log("failed");
        // dispatch(
        //   setSnackbarMessageAndOpen(
        //     "common.failToLoadOcc",
        //     {
        //       value: "account detail", // TODO 以后再改为id的形式
        //     },
        //     SEVERITIES.error
        //   )
        // );
      }
    };
  }

  //Create a new user
export function createUser(id) {
  return async (dispatch) => {
    try {
      let url = "/user/createNormalUser";

      const result = await axios_instance.post(
        url,
        {
          account: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );

      if (result.data.code === 200) {
        dispatch({ type: CREATE_USER, data: "true" });
      } else {
        if (result.data.code === 500) {
          if (result.data.message === "此学号已被注册")
            //判断是否是邮箱存在错误
            dispatch({ type: CREATE_USER, data: "EmailExit" });
        } else {
          dispatch({ type: CREATE_USER, data: "error" });
        }
      }
    } catch (err) {
      dispatch({ type: CREATE_USER, data: err.response.data.msg });
    }
  };
}

export function getUserList() {
  return async (dispatch) => {
    const res = await axios_instance.get("/user/getPageUsers", {
      params: {
        pageNum: 1,
        pageSize: 100,
      },
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    });
    if (res.data.code === 200) {
      dispatch({ type: SET_USERLIST, data: res.data.data });
    } else {
      dispatch(setErrorSnackbarMessageAndOpen("nullError", true));
    }
  };
}

export function DeleteUser(account) {
  return async (dispatch) => {
    try {
      let url = "/user/deleteNormalUser";
      const result = await axios_instance.get(
        url,
        {
          params: {
            account: account
          },
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );
      if (result.data.code === 200) {
        dispatch({ type: GET_DELETE, data: "true" });
      } else {
        if (result.data.code === 500) {
          dispatch({ type: GET_DELETE, data: "error" });
      }
    }
    } catch (err) {
      dispatch({ type: GET_DELETE, data: err.response.data.msg });
    }
  };
}

