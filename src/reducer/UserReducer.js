import * as actions from "../actions/UserAction";

const initState = {
  userImage: "",
  userName: "",
  userRole: "",
  userId: "",
  userLimited: "",
  createUserResult: "",
};

export default function UserReducer(state = initState, action) {
  const { type, data } = action;
  switch (type) {
    case actions.GET_USER_INFO:
      return {
        ...state,
        userImage: data.userImage,
        userName: data.userName,
        userRole: data.userRole,
        userId: data.userId,
        userLimited: data.userLimited,
      };
    case actions.CREATE_USER:
      return {
        ...state,
        createUserResult: data,
      };
    default:
      return state;
  }
}
