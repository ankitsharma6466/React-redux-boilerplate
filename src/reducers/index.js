import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux";
import sourceCityReduceer from "./sourceCityReducer";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  sourceCity: sourceCityReduceer
});
