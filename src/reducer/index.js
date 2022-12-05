import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import DeviceReducer from "./DeviceReducer";
const rootReducer = combineReducers({
    Login: LoginReducer,
    User: UserReducer,
    Device: DeviceReducer,
})

export default rootReducer;