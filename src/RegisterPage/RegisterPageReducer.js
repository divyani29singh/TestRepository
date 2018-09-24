import * as type from "../../types/ActionTypes";

  export const initialState = {
    
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
};

export const RegisterPageReducer = (state = initialState, action) =>{
  switch (action.type) {
    case type.Click_SignUp:
      return {
        ...state,
        isLoading: true,
        validationError: ""
      };
    case type.SignUp_Failed:
      return {
        ...state,
        loginFailed: true,
        isLoading: false,
       validationError: action.payload
      };
   case type.SignUp_Success:
      return {
        ...state,
        isLoading: false,
        loginSuccess: true,
        userData: action.payload
      };
    case type.SignUp_Login_Failed:
      return {
        ...state,
        loginFailed: true,
        isLoading: false,
       validationError: action.payload
      };
    case type.Clear_Sign_Up_Data:
      return {
        ...state,
        validationError: "",
        isLoading: false,
        userData: null,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        loginSuccess: false
      };
    default:
       return state;
}};
