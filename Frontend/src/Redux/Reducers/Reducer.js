import {
  REQUEST_LOGIN,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_DATA,
  LOGOUT,
  CLEAR_LOGIN,
} from "../Actions";
import { combineReducers } from "redux";

const loading = false;
const initialState = { users: [] };
const error = "";
const currentData = {};
const isLoggedIn = true;
const clearLogin = false;

export const clearLoginReducer = (state = clearLogin, action) => {
  switch (action.type) {
    case "CLEAR_LOGIN":
      return { state: true };
  }
  return state;
};
export const logoutReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case "LOGOUT":
      return { state: false };
  }
  return state;
};
export const dataReducer = (state = currentData, action) => {
  console.log("Reducer -> action", action);

  switch (action.type) {
    case "SET_CURRENT_DATA":
      return { ...state, users: action.data };
  }
  return state;
};
export const errorReducer = (state = error, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { state: action.data };
  }
  return state;
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return { ...state, user: action.data };
  }
  return state;
};

const loadingReducer = (state = loading, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { state: true };
  }
  return state;
};
const rootReducer = combineReducers({
  clearLoginReducer,
  logoutReducer,
  dataReducer,
  errorReducer,
  loginReducer,
  loadingReducer,
});

export default rootReducer;
