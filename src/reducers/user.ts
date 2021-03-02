export const SET_BASIC_INFO = 'SET_BASIC_INFO' as const;

export const setBasicInfo = (key:string, value:any) => ({
  type:SET_BASIC_INFO,
  payload:{
    key,
    value
  }
})

type BasicType = {
  user_id: number,
  birth: number,
  gender: string,
  email: string,
  korean_name: string,
  phone: string,
  timezone: string,
  mycode: string,
  personality: string,
  noti_push: boolean,
  noti_email: boolean,
  registration_token: string,
}

type UserInitialType = {
  jwtToken?:string,
  basic?:BasicType,
}

const initialState:UserInitialType = {
  jwtToken: undefined,
  basic:undefined,
};

type UserActionType =
  | ReturnType<typeof setBasicInfo>

const user = (state:UserInitialType = initialState, action:UserActionType) => {
  switch (action.type) {
    case SET_BASIC_INFO:{
      return {
        ...state,
        basic: {
          ...state.basic,
          [action.payload.key]: action.payload.value
        }
      }
    }

    default:{      
      return state;
    }
  }
};

export default user;