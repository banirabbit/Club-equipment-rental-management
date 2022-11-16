import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({
    Login: LoginReducer,
    User: UserReducer,
})

export default rootReducer;