import React, { Component } from 'react';
import {StyleSheet,View,AsyncStorage, Text, TouchableOpacity, Image, ActivityIndicator, BackHandler } from 'react-native';
import fetch from "cross-fetch";
import {Avatar} from 'react-native-elements';



var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Photo',

storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class ProfilePage extends Component{   
    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: true,
            data: {},
            image: null,
            avatarSource: null,
         };
      }
     

      componentDidMount() {
         fetch('http://demo2x.magentomobileshop.com/restapi/customer/getuserinfo', {
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
                .then(responseJson => {
                    this.setState({
                        isLoading: false,
                        data: responseJson.data,
                      })
                  //alert("success "+JSON.stringify(responseJson));
                  return responseJson;
                  })
                  .catch((error) => {
                    alert(" error  "+JSON.stringify(error));
                  console.error(error);
              });
    }
    
    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //   }
    
    //   componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    //   }
    
    //    handleBackPress = () => {
    //      this.props.navigation.goBack(null);
    //   }
    show(){
      
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
          
              this.setState({
                avatarSource: source
              });
            }
          });
    };

     Logout(){
           fetch('http://demo2x.magentomobileshop.com/restapi/customer/logout', {
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
                         {this.props.navigation.navigate('LoginPage',)}
                            alert("success "+JSON.stringify(responseJson));
                            return responseJson;
                            })
                        .catch((error) => {
                            alert(" error  "+JSON.stringify(error));
                            console.error(error);
                        });
                    }
    
  
     render(){
         if(this.state.isLoading){
             return(
                <View style={styles.activityIndicatorWrapper}>
                     <ActivityIndicator 
                     color='#29a329'
                     style={{ flex: 1 }}
                     size="large"/>
                 </View>
             )
         }
         let img = this.state.avatarSource == null? null:
    <Image
        source= {this.state.avatarSource}
        style={{height: 80,
                width:70 ,
                borderRadius: 200,
                justifyContent: 'center',
                alignItems:'center',
                }}
    />  
     
       return(
        <View style={styles.container}>
            
            <Text style={styles.welcomeText}>Welcome!</Text>   
            <View  style={{
                    flexDirection: "row",
                    borderColor:'#afd1d1',
                    borderWidth: 2,
                     padding : 20,
                    justifyContent: "center",
                   }}>
            <Avatar 
                large
                rounded
                title={img}
                // source={
                //     this.state.image == null
                //       ? require('../../assets/user_image.png')
                //       : this.state.image
                //   }
                // onPress={() => console.log("Works!")}
                onPress={()=>{this.show()}}
                activeOpacity={0.7}
                
            />
            
            <View  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    marginRight: 20 }}>
            <Text style={styles.textStyle}> Divyani Singh</Text>
            <Text style={styles.emailTextStyle}> divyani29singh@gmail.com</Text>
            {/* <Text style={styles.textStyle}> {`${this.state.data.firstname} ${this.state.data.lastname}`} </Text>}
                <Text style={styles.emailTextStyle}> {`${this.state.data.email}`} </Text> */}
            </View>
            </View>
           
            
            <View>
                <TouchableOpacity style={styles.button} 
                 onPress={()=>{this.Logout()}}> 
                  <Text style={styles.buttonText}> Log Out </Text>
                </TouchableOpacity>
            </View>
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
        borderRadius:7,
        backgroundColor: '#29a329',
        marginTop:150,
        height:50,
        width: 320,
        justifyContent: 'center',
    },
    activityIndicatorWrapper:{
        display: 'flex',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        flex:1,
      },
    welcomeText:{
        textAlign:'center',
        fontWeight:'bold',
        color: "black",
        fontSize: 40,
        marginBottom:70,
 },
    textStyle: {
        fontFamily: "futuraLigtBt",
        color: "black",
        fontSize: 20,
        padding: 3,
        marginLeft: 17,
        textAlign:'center',
       fontWeight:'bold',
      },
     
    emailTextStyle: {
        fontFamily: "futuraLigtBt",
        color: "grey",
        fontSize: 15,
        marginLeft:29,
        padding: 3,
        textAlign:'center',
 },
    buttonText:{
      color: 'white',
      fontWeight:'bold',
      textAlign: 'center',
      fontSize: 20,
    },
})

export default ProfilePage;
