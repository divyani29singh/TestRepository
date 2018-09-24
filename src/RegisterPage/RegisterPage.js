import React, { Component } from 'react';
import fetch from "cross-fetch";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { ValidateFirstName,
        ValidateLastName,
        ValidateEmail,
        ValidatePassword,
        ValidateConfirmPassword,
        checkValidEmail,
        isPasswordAndConfirmPasswordMatch,
        checkPasswordLength} from '../utils/Validation';
  


class RegisterPage extends Component{
    
    constructor(props){
        super(props);
        this.state = ({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        })
    }

    
    static navigationOptions = ()=> ({
        title: 'Sign Up',
      })
    
    updateValue(text, field){
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
   
checkAllfieldsValidations(first_name,last_name,email,password,confirm_password) {
    
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


 handleSubmit()
    {
        const {first_name,last_name,email, password,confirm_password} = this.state;
        if(this.checkAllfieldsValidations(first_name,last_name,email,password,confirm_password)){
          return true;
        }
        else {
          return false;
        }  
     };
             

     
    render(){
        
        return(
          
          <View style={styles.container}>
           <ScrollView >
               <TextInput
                placeholder="  First Name"
                value={this.state.first_name}
                style={styles.input}
                underlineColorAndroid={'transparent'}
                returnKeyType='next'
                // onChangeText={(first_name) => this.setState({first_name})}
                onChangeText={(text)=> this.updateValue(text,'first_name')}
               />
             
            
               <TextInput
                placeholder="  Last Name"
                value={this.state.last_name}
                style={styles.input}
                underlineColorAndroid={'transparent'}
                returnKeyType='next'
                onChangeText={(text)=> this.updateValue(text,'last_name')}
                />

         
                 <TextInput
                placeholder="  Email"
                value={this.state.email}
                returnKeyType='next'
                underlineColorAndroid={'transparent'}
                keyboardType='email-address'
                style={styles.input}
                onChangeText={(text)=> this.updateValue(text,'email')}
                />

                 <TextInput
                placeholder="  Password"
                value={this.state.password}
                style={styles.input}
                underlineColorAndroid={'transparent'}
                returnKeyType='next'
                secureTextEntry={true}
                onChangeText={(text)=> this.updateValue(text,'password')}
                />

                 <TextInput
                placeholder="  Confirm Password"
                value={this.state.confirm_password}
                style={styles.input}
                underlineColorAndroid={'transparent'}
                returnKeyType='done'
                secureTextEntry={true}
                onChangeText={(text)=> this.updateValue(text,'confirm_password')}
                />
                <TouchableOpacity onPress={()=>this.handleSubmit()} style={styles.button}>
                    <Text 
                     style={styles.buttonText}>
                      Sign Up
                    </Text>
                </TouchableOpacity>

                <View style={styles.SignIn}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('LoginPage')}}>
                  <Text style={styles.SignInText}>
                   Sign In
                   </Text>
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
        marginTop:40,
        borderRadius:7,
        height:50,
        width: 320,
        justifyContent: 'center',
    },
    buttonText:{
      color: 'white',
      fontWeight:'bold',
      textAlign: 'center',
      fontSize: 20,
    },
   
    input:{
        marginTop:15,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#808080',
        borderBottomWidth: 2,
    },
    text:{
      paddingTop:30,
      paddingLeft: 60,
      fontSize:16,
    },
    SignIn:{
       flexDirection:'row',
    },
    SignInText:{
      fontSize: 16,
      paddingTop:30,
      paddingLeft: 10,
      color:'#008000',
    }

});
export default RegisterPage;
