import * as actions from "../actions/LoginAction";

const initState = {
    auth: localStorage.getItem("authorization"),
    isAuthenticated: false,
    account: "",
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
        };
      case actions.LOGIN_ACCOUNT:
        return {
          ...state,
          account: data,
        };
      default:
        return state;
    }
  }
  