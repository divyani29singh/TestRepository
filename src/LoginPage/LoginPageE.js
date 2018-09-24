import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView,Image, TextInput} from 'react-native';
import {handleSubmit} from './LoginPageAction';
import { connect } from 'react-redux'



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
function mapStateToProps(state) {
  return {
    LoginState: state.LoginPageReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkLoggedInStatus: (navigation, userData, notificationSenderId) =>
      dispatch(checkLoginStatus(navigation, userData, notificationSenderId)),
      onLoginUser: (userData, navigation) =>
      dispatch(onLogin(userData, navigation)),
  };
}

export default connect( mapStateToProps, mapDispatchToProps)(LoginPage);
