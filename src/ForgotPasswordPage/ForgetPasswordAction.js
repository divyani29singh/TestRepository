
import * as type from '../ActionTypes';


// export const onResetPassword = (userEmail) => (dispatch) => {
//   dispatch(showLoader());
//   WebApi.PostApiHit('api/users/forgotpassword.json', {email: userEmail}).then((resetPasswordResponse) => {
//     if (resetPasswordResponse.success) {
//       dispatch({
//         successMessage: resetPasswordResponse.data.result,
//         type: type.Password_Reset_Success,
//       });
//       dispatch(hideLoader());
//     } else {
//       dispatch(hideLoader());
//       dispatch({
//         errorMessage: resetPasswordResponse.data.message,
//         type: type.Password_Reset_Failure,
//       });
//     }
//   });
// };

handleSubmit()
{
    const {email,} = this.state;
    if(ValidateEmail(email)){
        //API hit
         fetch('http://demo2x.magentomobileshop.com/restapi/customer/forgotpwd', {
                          method: 'GET',
                          headers: {
                              token: "xF09bFBni8lh150p9X2xcVmZo",
                              viewId: "1",
                              storeId: "1",
                              currency: "USD",
                              "Content-Type": "application/x-www-form-urlencoded"
                            },
                          body: null,
                          })
                          .then((response) => response.json())
                          .then((responseJson) => {
                                alert("success "+JSON.stringify(responseJson));
                                return responseJson;
                               })
                          .catch((error) => {
                                alert(" error  "+JSON.stringify(error));
                                console.error(error);
                            });
    }
     else {
             alert('Email is Empty!');
          }

}