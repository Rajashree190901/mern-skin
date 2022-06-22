import { combineReducers } from "redux";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getAllProductsReducer } from "./reducers/productReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import { totalReducer } from "./reducers/totalReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  totalReducer: totalReducer,
});
//if there is any name like cartitem then store it in the local storage in the json format.
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  UserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
