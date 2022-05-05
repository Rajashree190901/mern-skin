import { combineReducers } from "redux";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getAllProductsReducer } from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";
const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
