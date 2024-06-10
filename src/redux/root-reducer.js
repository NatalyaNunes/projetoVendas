import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import saleReducer from "./user/saleReducer";

const rootReducer = combineReducers({
  user: userReducer,
  sale: saleReducer,
});

export default rootReducer;
