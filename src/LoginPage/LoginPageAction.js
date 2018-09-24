import fetch from "cross-fetch";
import {checkValidEmail, ValidateEmail, ValidatePassword } from '../utils/Validation';





     export function handleSubmit()
       {
            const {email, password} = this.state;
                if(ValidateEmail(email)){
                    if (checkValidEmail(email, password)) {
                        if(ValidatePassword(password)){
                    //API hit
                    var formBody = [];
                        const data = {
                            username: this.state.email,
                            password: this.getBase64(this.state.password),
                        };
                        alert(JSON.stringify(data));
                        for (var property in data) {
                            var encodedKey = encodeURIComponent(property);
                            var encodedValue = encodeURIComponent(data[property]);
                            formBody.push(encodedKey + "=" + encodedValue);
                        }
                        formBody = formBody.join("&");
                                fetch('http://demo2x.magentomobileshop.com/restapi/customer/login', {
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
                                    {this.props.navigation.navigate('ProfilePage')};
                                    return responseJson;
                                 })
                                    .catch((error) => {
                                    alert(" error  "+JSON.stringify(error));
                                    console.error(error);
                                });
                           
                        
                } else {
                        alert('Password is required!')
                    }
            } else { 
                    alert('Invalid Email!');
                }
        } else{
                alert('Email is Empty!');
             }
     }


 getBase64(input) 
 {
    var keyStr =
      "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
    var output = "";
    var chr1, chr2, chr3 = "";
    var enc1,  enc2,  enc3, enc4 = "";
    var i = 0;
  
    do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
  
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
  
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
  
      output =
        output +
        keyStr.charAt(enc1) +
        keyStr.charAt(enc2) +
        keyStr.charAt(enc3) +
        keyStr.charAt(enc4);
      chr1 = chr2 = chr3 = "";
      enc1 = enc2 = enc3 = enc4 = "";
    } while (i < input.length);
    return output;
  }
  