import { axios_instance } from "../utils/axios_instance";
export const GET_USER_INFO = "GET_USER_INFO";
export const CREATE_USER = "CREATE_USER";

//Get user information
export function getUserInfo() {
    return async (dispatch) => {
      try {
        const result = await axios_instance.get("/user/profile", {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        });
        console.log(result, "22222");
        localStorage.setItem("userInfo", result.data); // 储存到local里面减少网络请求
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