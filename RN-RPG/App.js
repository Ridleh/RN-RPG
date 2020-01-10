import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './Navigation/AppNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
//import {store} from './Redux/Store/index';
import inventoryReducer from './Redux/Reducers/InventoryReducer'
/*
const initalState = {
  counter : 0
}

const reducer = (state = initalState, action ) => {
  //console.log(action)
  switch(action.type){
    case 'increaseCounter':
      return{counter: state.counter+1}

    case 'decreaseCounter':
      return{counter: state.counter-1}
  }
  return state;
}


const buyItem = 'buyItem';

const inventoryState = {
    items: [],
    spells: []
}

function inventoryReducer(state = inventoryState, action){
  console.log(state.items.length)
    switch(action.type){
        case buyItem:
            return{
                ...state,
                items: [...state.items, action.item]
            }
        default : return state;
    }
}
*/

const store = createStore(inventoryReducer)

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
      </Provider>
      
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      //require('./assets/images/robot-dev.png'),
      //require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      //'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
