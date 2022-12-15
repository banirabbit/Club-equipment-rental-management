import { datePickerToolbarClasses } from "@mui/x-date-pickers";
import * as actions from "../actions/DeviceAction";

const initState = {
  deviceInfo: [],
  deviceList: [],
  applyPass: null,
  equipId: 0,
  createDevice: null,
  changeStatus: null,
  search: "",
  editRes: "",
  count: 0,
};

export default function DeviceReducer(state = initState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.SET_DETAILINFO:
      return {
        ...state,
        deviceInfo: data,
      };
    case actions.SET_DEVICELIST:
      console.log(data, "88888888888888888888")
      return {
        ...state,
        deviceList: data.result,
        count: data.count,
      };
    case action.GET_APPLY:
      return {
        ...state,
        applyPass: data,
      };
    case action.GET_EQUIPID:
      return {
        ...state,
        equipId: data,
      };
    case action.CREATE_DEVICE:
      return {
        ...state,
        createDevice: data,
      }
    case action.GET_STATUS:
      return {
        ...state,
        changeStatus: data,
      }
    case action.SEARCH_DEVICE:
      return {
        ...state,
        search: data,
      }
    case action.EDIT_DEVICE:
      return {
        ...state,
        editRes: data,
      }
    default:
      return state;
  }
}
