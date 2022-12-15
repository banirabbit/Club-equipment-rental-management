import * as actions from "../actions/UserAction";

const initState = {
  userImage: localStorage.getItem("userInfo")?.userImage ?? "",
  userName: localStorage.getItem("userInfo")?.userName ?? "", 
  userRole: localStorage.getItem("userInfo")?.userRole ?? "",
  userId: localStorage.getItem("userInfo")?.userId ?? "",
  userLimited: localStorage.getItem("userInfo")?.userLimited ?? "",
  borrowed: localStorage.getItem("userInfo")?.borrowed ?? 0,
  createUserResult: "",
  userList: [],
  firstLogin: "",
  deleteRes: "",
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
        borrowed: data.borrowed,
        firstLogin: data.firstLogin,
      };
    case actions.CREATE_USER:
      return {
        ...state,
        createUserResult: data,
      };
    case actions.SET_USERLIST:
      return {
        ...state,
        userList: data,
      }
    case actions.GET_DELETE:
      return {
        ...state,
        deleteRes: data,
      }
    default:
      return state;
  }
}
