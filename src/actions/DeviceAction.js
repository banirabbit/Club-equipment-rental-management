import { axios_instance, axios_instance_fileDownload } from "../utils/axios_instance";



export function getCE(value) {
    if (value === undefined || value === null) {
      return;
    }
    return async (dispatch) => {
      try {
        var res = await axios_instance.get(`/equipment/borrow`, {
          params: {
            name: value,
            pageNum: 1,
            pageSize: 20,   // 100会报错，现改为20
          },
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        });
        if (res.data.code === 200) {
          dispatch({ type: GET_CE, data: res.data.data });
        } else {
          dispatch({ type: GET_CE, data: "error" });
        }
      } catch {
        return dispatch({ type: GET_CE, data: "error" });
      }
    };
  }