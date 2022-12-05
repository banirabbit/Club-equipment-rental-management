import { axios_instance } from "../utils/axios_instance";
import { setErrorSnackbarMessageAndOpen } from "./SnackbarAction";

export const SET_DETAILINFO = "SET_DETAILINFO";
export const SET_DEVICELIST = "SET_DEVICELIST";
export const GET_APPLY = "GET_APPLY";
export const GET_EQUIPID = "GET_EQUIPID";
export const CREATE_DEVICE = "CREATE_DEVICE";
export const GET_STATUS = "GET_STATUS";
export function getDeviceDetail(userId) {
  return async (dispatch) => {
    const res = await axios_instance.get("/log/getPageLogs", {
      params: {
        userId: userId,
        pageNum: 1,
        pageSize: 100,
      },
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    });
    if (res.data.code === 200) {
      dispatch({ type: SET_DETAILINFO, data: res.data.data });
    } else {
      dispatch(setErrorSnackbarMessageAndOpen("nullError", true));
    }
  };
}

export function getDeviceList(type) {
  return async (dispatch) => {
    const res = await axios_instance.get("/equipment/equipmentPage", {
      params: {
        pageNum: 1,
        pageSize: 100,
        type: type,
      },
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    });
    if (res.data.code === 200) {
      dispatch({ type: SET_DEVICELIST, data: res.data.data });
    } else {
      dispatch(setErrorSnackbarMessageAndOpen("nullError", true));
    }
  };
}

export function handleApply(equipmentId, account, name, phoneNumber, purpose) {
  return async (dispatch) => {
    try {
      let url = "/equipment/borrow";
      const result = await axios_instance.post(
        url,
        {
          equipmentId: equipmentId,
          account: account,
          name: name,
          phoneNumber: phoneNumber,
          purpose: purpose,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );
      console.log("3333333333333333");
      if (result.data.code === 200) {
        dispatch({ type: GET_APPLY, data: "true" });
      } else {
        if (result.data.message === "器材已被租借") {
          dispatch({ type: GET_APPLY, data: "DeviceExit" });
        } else {
          dispatch({ type: GET_APPLY, data: "error" });
        }
      }
    } catch (err) {
      dispatch({ type: GET_APPLY, data: err.response.data.msg });
    }
  };
}

export function getEquipId(equipmentId) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_EQUIPID, data: equipmentId });
    } catch (err) {
      dispatch(setErrorSnackbarMessageAndOpen("nullError", true));
    }
  };
}

export function createDevice(name, ways, category, rent) {
  return async (dispatch) => {
    try {
      let url = "/equipment/createEquipment";

      const result = await axios_instance.post(
        url,
        {
          rent: rent,
          note: ways,
          type: category,
          title: name,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );

      if (result.data.code === 200) {
        dispatch({ type: CREATE_DEVICE, data: "true" });
      } else {
        if (result.data.code === 500) {
          if (result.data.message === "此器材已经存在")
            //判断是否是邮箱存在错误
            dispatch({ type: CREATE_DEVICE, data: "DeviceExit" });
        } else {
          dispatch({ type: CREATE_DEVICE, data: "error" });
        }
      }
    } catch (err) {
      dispatch({ type: CREATE_DEVICE, data: err.response.data.msg });
    }
  };
}

export function handleChangeDeviceStatus(equipmentId) {
  return async (dispatch) => {
    try {
      let url = "/equipment/return";
      const result = await axios_instance.post(
        url,
        {
          
        },
        {
          params: {
            equipmentId: equipmentId
          },
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        }
      );
      if (result.data.code === 200) {
        dispatch({ type: GET_STATUS, data: "true" });
      } else {
        if (result.data.code === 500) {
          dispatch({ type: GET_STATUS, data: "error" });
      }
    }
    } catch (err) {
      dispatch({ type: GET_STATUS, data: err.response.data.msg });
    }
  };
}

