import {combineReducers} from "redux";
import AuthReducer from "../actions/AuthReducers";

export default combineReducers ({
    auth: AuthReducer
});

