import React from 'react';
import {TouchableOpacity ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { StackNavigator, createDrawerNavigator } from 'react-navigation';
import RegisterPage from './src/RegisterPage/RegisterPage.js';
import LoginPage from './src/LoginPage/LoginPage.js';
import ProfilePage from './src/ProfilePage/ProfilePage.js';
import ForgotPasswordPage from './src/ForgotPasswordPage/ForgotPasswordPage.js';
import Home from './src/Home/Home.js';




const LoginStack = StackNavigator(
  {
    LoginPage: { screen: LoginPage },
    RegisterPage: { screen: RegisterPage },
    ForgotPasswordPage: { screen: ForgotPasswordPage },
  }, {
    headerMode: 'float',
   });

const DrawerStack = createDrawerNavigator({
  Home: { screen: Home },
  ProfilePage: { screen: ProfilePage },

},
  {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    drawerBackgroundColor: 'lightgrey',
    drawerWidth: 270,
  })

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerLeft:
         <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}>
         <Icon  color="white" name="menu"  size={40}/>
        </TouchableOpacity>
      ,
      headerStyle: { backgroundColor: '#4C3E54' },
      title: '            Welcome!',
      headerTintColor: 'white',
    })
  })

const PrimaryNav = StackNavigator(
  {
    LoginStack: { screen: LoginStack },
    DrawerNavigation: { screen: DrawerNavigation },
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginStack'
  }
);

export default PrimaryNav;