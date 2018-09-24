import fetch from "cross-fetch";
import * as types from "../../types/ActionTypes";
import { ValidateFirstName,
        ValidateLastName,
        ValidateEmail,
        ValidatePassword,
        ValidateConfirmPassword,
        checkValidEmail,
        isPasswordAndConfirmPasswordMatch,
        checkPasswordLength} from '../utils/Validation';
  

export function updateValue(text, field) {
       if(field=='first_name')
       {
           this.setState({first_name:text})
       }
       else if(field=='last_name')
       {
           this.setState({ last_name:text})
       }
       else if(field=='email')
       {
           this.setState({email:text})
       }
       else if(field=='password')
       {
           this.setState({password:text})
       }
       else if(field=='confirm_password')
       {
           this.setState({confirm_password:text})
       }
 }
   
 export function checkAllfieldsValidations(first_name,last_name,email,password,confirm_password) {
    
  if (ValidateFirstName(first_name)) {
    if (ValidateLastName(last_name)) {
      if (ValidateEmail(email)) {
        if (checkValidEmail(email)) {
          if (ValidatePassword(password)) {
            if (ValidateConfirmPassword(confirm_password)) {
              if (isPasswordAndConfirmPasswordMatch(password, confirm_password)) {
                 if (checkPasswordLength(password)) {
                  //API hit
                  var formBody = [];
                  const data = {
                    firstname: this.state.first_name,
                    lastname: this.state.last_name,
                    email: this.state.email,
                    password: this.state.password,
                  };
                  for (var property in data) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(data[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                  }
                  formBody = formBody.join("&");
                      fetch('http://demo2x.magentomobileshop.com/restapi/customer/register', {
                      method: 'POST',
                      headers: {
                          token: "xF09bFBni8lh150p9X2xcVmZo",
                          viewId: "1",
                          storeId: "1",
                          currency: "USD",
                          "Content-Type": "application/x-www-form-urlencoded"
                        },
                      body: formBody,
                      }).then((response) => response.json())
                          .then((responseJson) => {
                            alert("success "+JSON.stringify(responseJson));
                            return responseJson;
                            
                            })
                            .catch((error) => {
                              alert(" error  "+JSON.stringify(error));
                            console.error(error);
                        });
                    
                  } else {
                    alert("Password is Short!");
                  }
                } else {
                  alert("Password does not match!");
                }
              } else {
                alert("Confirm Password is required!");
              }
            } else {
              alert("Password is required!");
            }
          } else {
            alert("Invalid Email!")
          }
        } else {
          alert("Email is required!")
        }
    } else {
      alert("Last Name is required!") 
    }
  } else {
    alert("First Name is required!")
  }
}


export function handleSubmit()
    {
        const {first_name,last_name,email, password,confirm_password} = this.state;
        if(this.checkAllfieldsValidations(first_name,last_name,email,password,confirm_password)){
          return true;
        }
        else {
          return false;
        }  
     };
