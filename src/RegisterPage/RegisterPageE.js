import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {handleSubmit} from './RegisterPageAction'
import { connect } from 'react-redux';
  
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

function mapStateToProps(state) {
  return {
    LoginState: state.LoginPageReducer,
    RegisterState: state.RegisterPageReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearFieldsData: () => dispatch(clearSignUpFieldsData()),
     onPressSignUp: (userObject) => dispatch(onSignUp(userObject)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

