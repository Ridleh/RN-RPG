import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';

const data = [
  {id: 'a', value: 'A'},
  {id: 'b', value: 'B'},
  {id: 'c', value: 'C'},
  {id: 'd', value: 'D'},
  {id: 'e', value: 'E'},
  {id: 'f', value: 'F'},
];
const numColumns = 3;
//const size = Dimensions.get('window').width/numColumns;
const {height, width} = Dimensions.get('window');

export default class BattleScreenTest extends Component {
  render(){
  return (
    /*
    <ImageBackground
    source={{uri : '.\assets\img_10003_01_03.png'}}
    style={{
      width : '100%',
      height: '100%'
    }}>
    <View style={{
      padding : 25
    }}>
      <Text>Hello</Text>
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
      </View>
      </ImageBackground>
      */
     <View style={{
       paddingTop: 25,
       backgroundColor : 'black'
     }}>
     <ImageBackground
    source={require('../assets/Backgrounds/GrassyPlains.png')}
    style={{
      width : '100%',
      height: '100%',
    }}>
      <View style={{height: '10%',flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
  <Text>Left   </Text>
  <Text>   Right</Text>
</View>
<View style={{flex: 1, flexDirection: 'row'}}>

        <View style={{flex: 1, backgroundColor : 'gray', justifyContent: 'space-evenly' }}>
          <TouchableHighlight
            onPress={() => console.log('click')}
          >
            <Image
            style={{height : 100, width : 100, paddingBottom : 10}}
            source={require('../assets/Characters/dummy_enemy.png')}/>
          </TouchableHighlight>
          <Image
          style={{height : 100, width : 100, opacity : 0}}
          source={require('../assets/Characters/dummy_enemy.png')}/>
          <Image
          style={{height : 100, width : 100, opacity : 0}}
          source={require('../assets/Characters/dummy_enemy.png')}/>
          <Image
          style={{height : 100, width : 100, opacity : 1}}
          source={require('../assets/Characters/dummy_enemy.png')}/>
        </View>

        <View style={{flex: 1, backgroundColor : 'blue', justifyContent: 'space-evenly' }}>
        <Image
          style={{height : 100, width : 100, opacity: 0, paddingBottom : 10}}
          source={require('../assets/Characters/dummy_enemy.png')}/>
          <Image
          style={{height : 100, width : 100, opacity : 1}}
          source={require('../assets/Characters/dummy_enemy.png')}/>
          <Image
          style={{height : 100, width : 100, opacity : 1}}
          source={require('../assets/Characters/dummy_enemy.png')}/>
          <Image
          style={{height : 100, width : 100, opacity : 0}} 
          source={require('../assets/Characters/dummy_enemy.png')}/>
        </View>

        <View style={{flex: 1, backgroundColor : 'green' }}>
        </View>

        <View style={{flex: 1, backgroundColor : 'white' }}>
        </View>

      </View>
      <View style={{
        height: '25%'
      }}>
        <Text>Bottom</Text>
      </View>
    </ImageBackground>
    </View>
  );
}}

const styles = StyleSheet.create({
  container : {
    width: width,
    height : height
  },
  itemContainer: {
    width: width/3,
    height: height/2 - 100,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
  }
});

