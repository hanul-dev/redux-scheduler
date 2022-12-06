import { createStore } from "redux";
import { combineReducers } from "redux";
import { dateReducer } from "../modules/dateReducer";

const rootReducer = combineReducers({
  date: dateReducer,
});
const store = createStore(rootReducer);

export default store;
