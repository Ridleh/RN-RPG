import React, {Component} from 'react'
import { Dimensions, Text, View, StyleSheet, FlatList, ImageBackground } from 'react-native'
import {Button, ButtonGroup, Icon, Header} from 'react-native-elements'
import {TouchableHighlight } from 'react-native-gesture-handler';
import {swordDatabase, staffDatabase, blackMagicSpellsDatabase} from '../ItemsAndSpells/ItemsAndSpellsDatabase';
import {connect} from 'react-redux'
//import {swordDatabase} from '../ItemsAndSpells/Weapons/Swords'
//import {staffDatabase} from '../ItemsAndSpells/Weapons/Staffs'

class ShopScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedIndex : 0,
            selectedItem : {},
            selectedItemName : " ",
            selectedItemPrice : 0,
            playersGold : 1000,
            buttonSelected : 'items',
            dummyItems : [],
            dummySpells : [],
        }
    }

    componentDidMount(){
        //console.log('componentDidMount - Shop')
        //console.log(this.state.swords)
        var swords = swordDatabase.slice()
        var staffs = staffDatabase.slice()
        var weaponsAndArmor = [...swords,...staffs]

        var blackMagicSpells = blackMagicSpellsDatabase.slice()
        var spells = [...blackMagicSpells]

        this.setState({
            dummyItems : weaponsAndArmor,
            dummySpells : spells
        })
    }

    componentWillUnmount(){
        //console.log('componentWillUnmount - Shop')
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
            selectedItem,
            selectedItemName : selectedItem.name,
            selectedItemPrice : selectedItem.price 
        })
    }

    purchaseItem(){
        if(this.state.playersGold > this.state.selectedItemPrice){
            var newGoldPrice = this.state.playersGold - this.state.selectedItemPrice
            this.setState({playersGold : newGoldPrice})
        }

        if(this.state.selectedItem.type === 'Sword'){
            this.props.buyItem(this.state.selectedItem)
        }
        else if(this.state.selectedItem.type === 'Staff'){
            this.props.buyItem(this.state.selectedItem)
        }
        else if(this.state.selectedItem.type === 'Black Magic'){
            this.props.buySpell(this.state.selectedItem)
        }
    }

    component1 = () => <Text>Weapons and Armor</Text>
    component2 = () => <Text>Abilities</Text>

    renderItem(item){
        return(
            <TouchableHighlight onPress={() => this.updateShopSummayScreen(item)}>
                <View style={styles.item}>
                    <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={item.image}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent : 'space-between'}}>
        <Text adjustsFontSizeToFit style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>{item.price}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableHighlight>
        );
    }

    renderCurrencies(){
        return(
            <View style={{flex:1}}>
                <Text>GOLD: {this.state.playersGold}</Text>
            </View> 
        );
    }

    render(){
        const buttons = [{element: this.component1}, {element: this.component2}]
        const {selectdIndex} = this.state
        return(
            <View style={{ paddingTop: 25, flex: 1}}>
                <Header
                    containerStyle={{backgroundColor: '#964b00'}}
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
                    centerComponent = {{text: 'SHOP', style : {color : '#fff'}}}
                    rightComponent={this.renderCurrencies()}
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
                        <FlatList
                            numColumns={4}
                            data={this.getData()}
                            style={{
                                flex : 1,
                                marginVertical : 10,
                                //alignItems : 'center'
                            }}
                            renderItem={({ item }) => this.renderItem(item)}
                        /> 
                    </View>

                    <View style={{flex:3}}>

                            <View style={styles.checkOutBox}>
                                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    
                                <Text style={{paddingBottom: 10}}>NAME : {this.state.selectedItemName}</Text>
                                    <Text>COST: {this.state.selectedItemPrice} </Text>
                                </View>
                                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    <Text>HEALTH: +0 </Text>
                                    <Text>ATTACK: +0</Text>
                                    <Text>RESISTANCE: +0</Text>
                                </View>
                                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    <Text>DEFENCE: +0</Text>
                                    <Text>MAGIC: +0</Text>
                                    <Text>MIND: +0</Text>
                                </View>
                                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                    <Text>LUCK: +0 </Text>
                                    <Text>SPEED: +0</Text>
                                    <Text>COPIES OWNED: 0</Text>
                                </View>
                            </View>
                            <Button
                            onPress={() => this.purchaseItem()}
                            style={{flex: 2, paddingVertical: 10}}
                            title= {this.state.playersGold > this.state.selectedItemPrice ? "PURCHASE" : "INSUFFICIENT FUNDS"}
                            />
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
        margin: 1/5,
        height: Dimensions.get('window').width /4, // approximate a square
        width : Dimensions.get('window').width/4,
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
        flex : 3,
        backgroundColor : '#D3D3D3',
        borderRadius: 4,
        borderWidth: 10,
        borderColor : '#000000',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
})


function mapStateToProps(state){
    return{
        selectedIndex : 0,
        selectedItem: {},
        selectedItemName : " ",
        selectedItemPrice : 0,
        playersGold : 1000,
        buttonSelected : 'items',
        dummyItems : [],
        dummySpells : [],
    }
}

function mapDispatchToProps(dispatch){
    //console.log('printing dispatch',dispatch)
    return{
        buyItem: (item) => dispatch({type: 'buyItem', item: item}),
        buySpell: (spell) => dispatch({type: 'buySpell', spell: spell})
        //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen)