import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerTokenAPI, signInAPI, errorAPI} from '../apis/Auth';

export const SET_JWT_TOKEN = 'SET_JWT_TOKEN';
export const SET_LOGIN_TYPE = 'SET_LOGIN_TYPE';
export const SET_WEBVIEW_LOADED = 'SET_WEBVIEW_LOADED';
export const SET_ROUTE_LOADED = 'SET_ROUTE_LOADED';
export const SET_BASIC = 'SET_BASIC';

export const sendErrorReport = (payload) => {
  console.log('sert reg');
  return (dispatch) => {
    errorAPI(payload);
  };
};

export const setRegistrationToken = (jwtToken, registrationToken) => {
  return (dispatch) => {
    registerTokenAPI(registrationToken).then((json) => {
      console.log(json);
    });
  };
};

// import {signInAPI} from '../apis/Auth';
// signInAPI(payload).then((json) => {
//   if(!json.success){
//     alert(json.message);
//     return
//   }

//   const jwtToken = json.jwt_token;
//   fcmListener.initialize(jwtToken); //this might be the way..
//   dispatch(setJwtToken(jwtToken));
//   AsyncStorage.setItem("jwt_token", jwtToken);
//   Actions.list();
// })
