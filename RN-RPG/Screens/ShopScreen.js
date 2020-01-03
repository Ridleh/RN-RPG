import React, {Component} from 'react'
import { Dimensions, Text, View, StyleSheet, Button, FlatList, ScrollView } from 'react-native'
import Constants from 'expo-constants';
import {ButtonGroup, Header, Icon, ListItem} from 'react-native-elements'
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

  function Item({ title }) {
    return (
        <View style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
    );
  }

export default class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedIndex : 0,
            selectedItemName : " ",
            selectedItemPrice : 0,
            buttonSelected : 'items',
            dummyItems : [
                {name: 'a', price: 100},
                {name: 'b', price: 200},
                {name: 'c', price: 300},
                {name: 'd', price: 400},
                {name: 'e', price: 500},
                {name: 'f', price: 600},
                {name: 'aa', price: 10},
                {name: 'bb', price: 20},
                {name: 'cc', price: 30},
                {name: 'dd', price: 40},
                {name: 'ee', price: 50},
                {name: 'ff', price: 60},
                {name: 'a', price: 1},
                {name: 'b', price: 2},
                {name: 'c', price: 3},
                {name: 'd', price: 4},
                {name: 'e', price: 5},
                {name: 'f', price: 6},
                {name: 'aa', price: 11},
                {name: 'bb', price: 120},
                {name: 'cc', price: 130},
                {name: 'dd', price: 140},
                {name: 'ee', price: 150},
                {name: 'ff', price: 16},
              ],
            dummySpells : [
                {name: 'g', price: 100},
                {name: 'h', price: 200},
                {name: 'i', price: 300},
                {name: 'j', price: 400},
                {name: 'k', price: 500},
                {name: 'l', price: 600},
              ],
        }
    }

    componentDidMount(){
        console.log('componentDidMount - Shop')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount - Shop')
    }

    getData(){
        return this.state.selectedIndex === 0 ? this.state.dummyItems : this.state.dummySpells
    }

    updateIndex(selectedIndex){
        //console.log(selectedIndex)
        this.setState({selectedIndex})
    }

    updateShopSummayScreen(selectedItem){
        this.setState({
            selectedItemName : selectedItem.name,
            selectedItemPrice : selectedItem.price 
        })
    }

    component1 = () => <Text>Weapons and Armor</Text>
    component2 = () => <Text>Spells</Text>

    renderItem(item){
        <ListItem
            title={item.name}
            subtitle={item.price}
        />
    }

    render(){
        const buttons = [{element: this.component1}, {element: this.component2}]
        const {selectdIndex} = this.state
        return(
            <View style={{paddingTop: 25, flex: 1}}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
                    centerComponent = {{text: 'SHOP', style : {color : '#fff'}}}
                />
                <ButtonGroup
                    onPress={(index) => this.updateIndex(index)}
                    selectdIndex={selectdIndex}
                    buttons={buttons}
                    containerStyle={{height : 75}}
                />
                <View style = {{flex : 1}}>
                    <View
                    style={{flex: 4}}>
                        <Text>this will be shop screen</Text>
                        <FlatList
                            numColumns={3}
                            data={this.getData()}
                            style={{
                                flex : 1,
                                marginVertical : 20
                            }}
                            renderItem={({ item }) =>
                            
                            <TouchableHighlight onPress={() => this.updateShopSummayScreen(item)}>
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                            }
                        />
                            
                    </View>

                    <View
                    style={{flex:3}}>
                        <Text>this will be summary screen</Text>
                        <View style={styles.checkOutBox}>
                            <View style={{flex:1}}>
                                <Text>{this.state.selectedItemName}</Text>
                                <Text>{this.state.selectedItemPrice}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / 3, // approximate a square
        width : Dimensions.get('window').width/3,
      },
    title: {
        fontSize: 32,
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    itemText : {
        color: '#fff'
    },
    checkOutBox : {
        flex : 1,
        backgroundColor : '#D3D3D3',
        borderRadius: 4,
        borderWidth: 10,
        borderColor : '#000000'
    }
})