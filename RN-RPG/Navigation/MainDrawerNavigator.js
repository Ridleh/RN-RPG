import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'

import {BattleScreenTest, HomeScreen, InventoryScreen, PartyScreen, QuestScreen, ShopScreen} from '../Screens/Index';

  const drawer_nav = (props) => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor : '#964b00' }}>
        <View style={{ height: 275 }}>
          <View style={{height: 250, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/cure.png')} style={{height: 185, width: 190, borderRadius: 50 }} />
          </View>
          <View style={{height: 50, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{height : 75, fontSize: 20, fontWeight: 'bold'}} >MENU</Text>
          </View>
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const Menu = createDrawerNavigator({
      'HomeScreen' : {
        screen: HomeScreen,
        navigationOptions: {
          drawerIcon: () => <Ionicons name="md-home" size={30} style={{ width: 24 }} 
          color='#4caf50' />
        }
      },
      'BattleTestScreen' : {
        screen: BattleScreenTest,
        navigationOptions: {
          drawerIcon: () => <Ionicons name="md-home" size={30} style={{ width: 24 }} 
          color='#4caf50' />
        }
      },
      'InventoryScreen' : {
        screen: InventoryScreen,
        navigationOptions: {
          drawerIcon: () => <Ionicons name="md-home" size={30} style={{ width: 24 }} 
          color='#4caf50' />
        }
      },
      'PartyScreen' : {
        screen: PartyScreen,
        navigationOptions: {
          drawerIcon: () => <Ionicons name="md-home" size={30} style={{ width: 24 }} 
          color='#4caf50' />
        }
      },
      'QuestScreen' : {
        screen: QuestScreen,
        navigationOptions: {
          drawerIcon: () => <Ionicons name="md-home" size={30} style={{ width: 24 }} 
          color='#4caf50' />
        }
      },
      'ShopScreen' : {
        screen: ShopScreen,
        navigationOptions: {
          drawerIcon: () => <Ionicons name="md-home" size={30} style={{ width: 24 }} 
          color='#4caf50' />
        }
      },
    },
    {
      contentComponent: drawer_nav,
      drawerWidth: '75%',
      drawerPosition: 'left',
      initialRouteName: 'HomeScreen',
    }
  );
  
  
  Menu.path = '';
  
  export default Menu