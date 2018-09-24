  
  
   export function checkValidEmail(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) == false) {
      return false;
    } else {
      return true;
    }
  };

    export function ValidateFirstName(first_name){
    if(first_name){
      return true;
    }else{
      return false;
    }
    }
    export function ValidateLastName(last_name){
      if (last_name) {
        return true;
      } else {
        return false;
      }
    }
    
    export function ValidateEmail(email){
      if (email) {
        return true;
      } else {
        return false;
      }
    }
    export function ValidatePassword(password){
      if (password) {
        return true;
      } else {
        return false;
      }
    }
    export function ValidateConfirmPassword(confirm_password){
      if (confirm_password) {
        return true;
      } else {
        return false;
      }
    }
    
    export function isPasswordAndConfirmPasswordMatch(password,confirm_password ){
      if (password != confirm_password) {
        return false;
      } else {
        return true;
      }
    }
    export function checkPasswordLength(password){
      if (password.length >= 6) {
        return true;
      } else {
        return false;
      }
    }