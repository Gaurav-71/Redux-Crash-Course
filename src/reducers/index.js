import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer, // this can also be written as anyName : imported component
  loggedReducer,
});

export default allReducers;
