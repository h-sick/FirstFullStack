import {combineReducers} from 'redux';

export const USER_LOGOUT = "USER_LOGOUT"
export const userLogOut = () => ({
  type: USER_LOGOUT,
});

//import user from './user'; 

const appReducer = combineReducers({
//요기에 다른 sub reducer들이 들어갑니다.
})

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer