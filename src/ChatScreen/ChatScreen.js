import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView,Image, TextInput} from 'react-native';


class ChatScreen extends Component{
constructor(props){
    super(props);
    this.state = ({
            isLoading  : true,
    })
}


render(){
    if(this.state.isLoading){
        <ActivityIndicator
        size="large"
        color= "white"
        style= {{flex:1}}
        />
    }
   
    return(
        <View>
            <View>
                <TouchableOpacity>
                    <Text> Click Me!</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
}

export default ChatScreen;