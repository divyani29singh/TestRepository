import * as type from "../../types/ActionTypes";

const initialState = {
  isLoading: false,
  validationError: "",
  userData: null,
  userLoginDetail: null,
  loginFailed: false,
  loginSuccess: false,
  invalidEmail: false,
  emptyFields: false,
  socialLogin: false,
  fbUserToken: ''
};

export default function LoginPageReducer(state = initialState, action) {
  switch (action.type) {
    case type.Login_Success:
    console.log(JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        showData: true,
        loginFailed: false,
        loginSuccess: true,
        userData: action.payload
      };
    case type.Social_Login_Click:
      return { ...state, socialLogin: true };
    case type.Save_User_Data:
      return { ...state, userLoginDetail: action.payload };
    case type.Click_SignIn:
      return {
        ...state,
        isLoading: true,
        validationSnackIsVisible: false,
        validationError: ""
      };
    case type.Login_Failed:
      return {
        ...state,
        loginFailed: true,
        isLoading: false,
        loginSuccess: false,
        validationSnackIsVisible: true,
        validationError: action.payload
      };
    
    default:
      return state;
  }
}

  