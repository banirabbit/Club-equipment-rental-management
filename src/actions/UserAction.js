import { axios_instance } from "../utils/axios_instance";
export const GET_USER_INFO = "GET_USER_INFO";

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