export const initialState = {
    
    isLoading: true,
    data: {},
    avatarSource: null,
};

export const ProfilePageReducer = (state = initialState, action) =>{
  switch (action.type) {
    case type.Click_Logout:
      return {
        ...state,
        isLoading: true,
        validationError: ""
      };
    default:
       return state;
}};
