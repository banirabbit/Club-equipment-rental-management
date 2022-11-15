import * as actions from "../actions/UserAction";

const initState = {
  userImage: "",
  userName: "",
  userRole: "",
  userId: "",
  userLimited: "",
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

    default:
      return state;
  }
}
