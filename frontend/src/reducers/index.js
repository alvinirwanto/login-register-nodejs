import { combineReducers } from "redux";
import authReducer from "./AuthReducer";

export const allReducers = combineReducers({ authReducer })