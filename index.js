import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import PrimaryNav from './App.js'
// import { Provider } from 'react-redux';
// import  configureStore  from './src/store/configureStore';

// const store = configureStore();

export default class App extends Component{

    render(){
        return(
            <PrimaryNav/> 
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
