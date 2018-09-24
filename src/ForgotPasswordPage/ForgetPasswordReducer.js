import * as type from '../ActionTypes';
const initialState = {
  errorMessage: '',
  showErrorDialog: false,
  showSuccessDialog: false,
  successMessage: '',
};

export default function ForgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case type.Password_Reset_Success:
      return {
        ...state,
        showSuccessDialog: true,
        successMessage: action.successMessage,
      };
    case type.Password_Reset_Failure:
      return {
        ...state,
        errorMessage: action.errorMessage,
        showErrorDialog: true,
      };
    case type.Hide_Success_Dialog:
      return {
        ...state,
        showSuccessDialog: false,
      };
    case type.Hide_Error_Dialog:
      return {
        ...state,
        showErrorDialog: false,
      };
    default:
      return state;
  }
}