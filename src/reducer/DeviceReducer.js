import * as actions from "../actions/DeviceAction";

const initState = {
  deviceInfo: [],
  deviceList: [],
  applyPass: null,
  equipId: 0,
  createDevice: null,
  changeStatus: null,
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
      return {
        ...state,
        deviceList: data,
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
    default:
      return state;
  }
}
