import * as actions from "../actions/LoginAction";

const initState = {
  auth: localStorage.getItem("authorization"),
  isAuthenticated: false,
  account: localStorage.getItem("account"),
  resetPass: null,
  errorMsg: null,
  ifFirst: false,
};

export default function LoginReducer(state = initState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.LOGIN_SUCCESS:
      localStorage.setItem("authorization", data.data.authorization);
      return {
        ...state,
        auth: data.data.authorization,
        isAuthenticated: true,
        ifFirst: data.data.ifFirst,
      };
    case actions.LOGIN_ACCOUNT:
      return {
        ...state,
        account: data,
      };
    case actions.RESETPASS:
      return {
        ...state,
        resetPass: data,
      };
    case actions.CLEAR_LOGIN:
      return initState;
    case actions.LOGIN_FAILED_CLEAR:
      return {
        ...state,
        isAuthenticated: false,
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        errorMsg: data,
      };
    case actions.LOGOUT:
      localStorage.removeItem("authorization");
      localStorage.removeItem("userInfo");
      return {
        ...state,
        auth: null,
        isAuthenticated: false,
        userId: null,
        ifFirst: false,
        errorMsg: null,
      };
    default:
      return state;
  }
}
