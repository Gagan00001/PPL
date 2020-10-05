import {
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_DATA,
  LOGOUT,
} from "../Actions";
import { combineReducers } from "redux";

const loading = false;
const error = {};
const currentData = {};
const isLoggedIn = true;
// const clearLogin = false;

// export const clearLoginReducer = (state = clearLogin, action) => {
//   switch (action.type) {
//     case "CLEAR_LOGIN":
//       return { state: true };
//   }
//   return state;
// };
export const logoutReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case LOGOUT:
      return { state: false };
  }
  return state;
};
export const dataReducer = (state = currentData, action) => {
  console.log("Reducer -> action", action);

  switch (action.type) {
    case SET_CURRENT_DATA:
      console.log({ ...state, user: action.data });
      return { ...state, user: action.data };
  }
  return state;
};
export const errorReducer = (state = error, action) => {
  console.log(action)
  switch (action.type) {
    case SET_ERROR:
      // console.log({error:action.error})
  
    return { error: action.error };

  }
  return state;
};

const loadingReducer = (state = loading, action) => {
  switch (action.type) {
    case SET_LOADING:
      console.log({ state: action.flag });
      return { state: action.flag };
  }
  return state;
};
const rootReducer = combineReducers({
  // clearLoginReducer,
  logoutReducer,
  dataReducer,
  errorReducer,
  loadingReducer,
});

export default rootReducer;
