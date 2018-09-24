import React, { Component } from 'react';
import fetch from "cross-fetch";
import Icon from 'react-native-vector-icons/Entypo';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView,Image, TextInput} from 'react-native';
import {checkValidEmail, ValidateEmail, ValidatePassword } from '../utils/Validation';



class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state=({
             email: '',
            password: '',
           
        })
    };
    static navigationOptions = ()=> ({
        title: 'Sign In',
      });



    updateValue(text, field){
      
       if(field=='email')
       {
           this.setState({
               email:text,
           })
       }
       else if(field=='password')
       {
           this.setState({
            password:text,
           })
       }
     }

       handleSubmit()
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


getBase64(input) {
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
    render(){
        
        return(
            <View style={styles.container}>
                <ScrollView>
                <Image 
                style={styles.image}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
              
                 <TextInput
                placeholder="   Email"
                returnKeyType='next'
                keyboardType='email-address'
                style={styles.input}
                value={this.state.email}
                onChangeText={(text)=> this.updateValue(text,'email')}
                />

                 <TextInput
                placeholder="    Password"
                returnKeyType='go'
                secureTextEntry={true}
                value={this.state.password}
                style={styles.input}
                onChangeText={(text)=> this.updateValue(text,'password')}
                />

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ForgotPasswordPage')}}>
                    <Text style={styles.ForgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                 <TouchableOpacity onPress={()=>this.handleSubmit()} style={styles.button}>
                    <Text 
                     style={styles.buttonText}>
                    Sign In
                    </Text>
                </TouchableOpacity>


                <View style={styles.SignUp}>
                <Text style={styles.text}>Don't have an account?</Text>
                  <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('RegisterPage')}}>
                  <Text  style={styles.SignUpText}>Sign Up</Text>
                  </TouchableOpacity> 
                </View>
                </ScrollView>
            
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#cee2e2',
        flex: 1,
        justifyContent: 'center',
    },
    button:{
        alignItems:'center',
        marginLeft: 20,
        backgroundColor: '#29a329',
        borderRadius:7,
        marginTop:20,
        height:50,
        width: 320,
        justifyContent: 'center',
    },
    ForgotPasswordText:{
        fontSize: 16,
        paddingLeft: 10,
        color:'#809966',
        marginLeft:200,
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center',
        fontSize: 20
      },
      text:{
        paddingTop:30,
        paddingLeft: 60,
        fontSize:16,
      },
      SignUp:{
        flexDirection:'row',
     },
     SignUpText:{
        fontSize: 16,
        paddingTop:30,
        paddingLeft: 10,
        color:'#008000',
      },
    input:{
        margin: 7,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#808080',
        borderBottomWidth: 2,
    },
    image:{
        justifyContent: 'center',
        height: 40,
        width:70,
        borderWidth: 2,
        borderColor:'black',
        paddingTop: 35,
        marginTop:30,
        paddingBottom: 30,
        marginLeft:150,
        marginBottom: 50,

    }
});
export default LoginPage