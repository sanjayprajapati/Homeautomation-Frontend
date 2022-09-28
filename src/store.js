import { createStore, combineReducers, applyMiddleware } from "redux";
import thuk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userReducer,
  allUsersReducer,
  controllerReducer,
  controllerTypeReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
  controllers: controllerReducer,
  controllerType: controllerTypeReducer,
});

let initialState = {};
const middleware = [thuk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
