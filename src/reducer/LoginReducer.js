import * as actions from "../actions/LoginAction";

const initState = {
    auth: localStorage.getItem("authorization"),
    isAuthenticated: false,
    
  };

  export default function LoginReducer(state = initState, action) {
    const { type, data } = action;
    switch (type) {
      case actions.LOGIN_SUCCESS:
        localStorage.setItem("authorization", data.data.authorization);
        return {
          ...state,
          auth: data.headers.authorization,
          isAuthenticated: true,
        };
      default:
        return state;
    }
  }
  