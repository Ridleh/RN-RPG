import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MainDrawerNavigator from './MainDrawerNavigator';
/*
import MainTabNavigator from './MainTabNavigator';
import LogInScreen from '../screens/LoginScreen';
import ScreenNavigation from '../navigation/ScreenNavigation';
import LoadingScreen from '../screens/LoadingScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: LogInScreen,
    //App: ScreenNavigation 
    App: MainTabNavigator,
    AuthLoading: LoadingScreen
  },
  {
    initialRouteName: 'AuthLoading'
  })
);
*/
export default createAppContainer(
  createDrawerNavigator({
    App: MainDrawerNavigator
  })

)