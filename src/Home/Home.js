import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity, Image, ScrollView, View, Text,} from 'react-native';


var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Photo',

storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class Home extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            num:0,
            avatarSource: null,
         };
      }
 

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

render(){
    let img = this.state.avatarSource == null? null:
    <Image
        source= {this.state.avatarSource}
        style={{height: 400,
                width:350 ,
                justifyContent: 'center',
                alignItems:'center',
                 marginLeft: 40,
                marginTop:20,}}
    />

    return(
        <View style={styles.container}>
        <ScrollView>
            <Text style={styles.text}> This is Home</Text>
            <TouchableOpacity 
             style={styles.button} 
              onPress={()=>{this.show()}}>
             <Text style={styles.buttonText}>Select a Photo</Text>
             {img}
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
    text:{
        marginTop:10,
        textAlign:'center',
        backgroundColor: '#b89494',
        borderColor: 'grey',
        borderWidth: 4,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
    },
    button:{
        alignItems:'center',
        marginLeft: 40,
        marginTop:20,
        borderRadius:7,
        backgroundColor: '#737f93',
        height:350,
        width: 280,
        justifyContent: 'center',
    },
    
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        textAlign: 'center',
        fontSize: 20,
      },

   
});
export default Home;