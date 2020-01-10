import React, {Component} from 'react'
import { StyleSheet, TouchableHighlight, Text, View, Dimensions, ImageBackground, FlatList } from 'react-native'
import { Header, ButtonGroup } from 'react-native-elements'

const {height, width} = Dimensions.get('window')

export default class InventoryScreen extends Component {

    constructor(props){
        super(props)
        this.state ={
            selectedIndex : 0,
            weapons : [
                {name: 'weapon I', price: 100},
                {name: 'weapon II', price: 200},
                {name: 'weapon III', price: 300},
                {name: 'weapon IV', price: 400},
                {name: 'weapon V', price: 500},
                {name: 'weapon VI', price: 600},
            ],
            armors : [
                {name: 'armor I', price: 100},
                {name: 'armor II', price: 200},
                {name: 'armor III', price: 300},
                {name: 'armor IV', price: 400},
                {name: 'armor V', price: 500},
                {name: 'armor VI', price: 600},
            ],
            spells : [
                {name: 'spell I', price: 100},
                {name: 'spell II', price: 200},
                {name: 'spell III', price: 300},
                {name: 'spell IV', price: 400},
                {name: 'spell V', price: 500},
                {name: 'spell VI', price: 600},
            ],
            other : [
                {name: 'g', price: 100},
                {name: 'h', price: 200},
                {name: 'i', price: 300},
                {name: 'j', price: 400},
                {name: 'k', price: 500},
                {name: 'l', price: 600},
            ],
        }
    }

    updateIndex(selectedIndex){
        this.setState({selectedIndex})
    }

    getData(){
        if(this.state.selectedIndex === 0){
            return this.state.weapons
        }
        else if(this.state.selectedIndex === 1){
            return this.state.armors
        }
        else if(this.state.selectedIndex === 2){
            return this.state.spells
        }
        else{
            return this.state.other
        }
    }

    renderItem(item){
        return(
            <TouchableHighlight onPress={() => console.log('pressed')}>
                <View style={styles.item}>
                    <ImageBackground
                    style={{height: '100%', width: '100%'}}
                    source={require('../assets/Items/Swords/sword.png')}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent : 'space-between'}}>
        <Text adjustsFontSizeToFit style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>{item.price}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableHighlight>
        );
    }

    render(){

        const buttons = ['Weapons', 'Armor', 'Spells', 'Other']
        const { selectedIndex } = this.state

        return(
            <View style={{paddingTop : 25}}>
                <ImageBackground
                source={require('../assets/Backgrounds/SampleBackgroundQuests.png')}
                style={{height: height-24, width: width}}>
                    <Header
                    containerStyle={{backgroundColor: '#964b00',}}
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
                    centerComponent = {{text: 'INVENTORY', style : {color : '#fff'}}}
                    />
                    <ButtonGroup
                    onPress={(selectedIndex) => this.updateIndex(selectedIndex)}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: '5%'}}/>
                    <View style={{flex:1 }}>
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
                
                </ImageBackground>
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