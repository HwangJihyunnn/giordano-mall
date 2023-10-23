import { combineReducers } from "redux";
import productReduce from "./productReduce";
import authenticateReducer from "./authenticateReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReduce
})