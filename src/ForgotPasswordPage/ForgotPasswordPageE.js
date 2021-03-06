import React from "react";
import { View, StyleSheet , ScrollView, Text, TextInput,TouchableOpacity} from "react-native";
import {ValidateEmail } from '../utils/Validation';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: ""
      };
     }

     updateValue(text, field){
        if(field=='email')
        {
            this.setState({
                email:text,
            })
        }
    }

   
     static navigationOptions = ()=> ({
        title: 'Forgot Password',
      });

    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>
                    Forgot Your Password?
                </Text>
                <Text style={styles.smallText}>
                    Enter your email address for further instructions.
                </Text>

                <TextInput
                placeholder="  Email"
                value={this.state.email}
                underlineColorAndroid={'transparent'}
                keyboardType='email-address'
                style={styles.input}
                onSubmitEditing={() => this.email.focus()}
                onChangeText={(text)=> this.updateValue(text,'email')}
                />
                <TouchableOpacity onPress={()=>this.handleSubmit()} style={styles.button}>
                    <Text  style={styles.buttonText}>
                      Submit
                    </Text>
                </TouchableOpacity>

                
            </ScrollView>
            </View>
        )
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
        marginTop:40,
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
        marginTop: 70,
        marginLeft: 15,
        marginRight: 15,
        borderBottomColor: '#808080',
        borderBottomWidth: 2,
    },
    text:{
      color:'#00394d',
      paddingTop:30,
      paddingLeft: 60,
      fontWeight:'bold',
      fontSize:22,
    },
    smallText:{
        color:'#00394d',
        paddingTop:30,
        paddingLeft: 60,
        fontSize:16,
      },
   

});

function mapStateToProps(state) {
    return {
      ForgotPasswordState: state.ForgotPasswordReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onClickSubmit: (email) => dispatch(onResetPassword(email)),
 };
  }
  
  export default connect( mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);