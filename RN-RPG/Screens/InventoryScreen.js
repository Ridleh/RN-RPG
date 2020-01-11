import React, {Component} from 'react'
import { StyleSheet, TouchableHighlight, Text, View, Dimensions, ImageBackground, FlatList } from 'react-native'
import { Header, ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'
import store from '../Redux/Store'



const {height, width} = Dimensions.get('window')

class InventoryScreen extends Component {

    constructor(props){
        //console.log('2')
        super(props)
        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount(){
        //console.log('2')
        //console.log(this.props.getItems())
        //this.props.weapons = this.props.getItems();
        //var state = store.getState()
        //console.log(state)
        //this.state.weapons = state.items
        //this.setState({ weapons : state.items})
        //this.props.selectedIndex = 2;
    }

    updateIndex(selectedIndex){
        this.setState({selectedIndex})
    }

    getData(){
        if(this.state.selectedIndex === 0){
            return this.props.weapons
        }
        else if(this.state.selectedIndex === 1){
            return this.props.weapons
        }
        else if(this.state.selectedIndex === 2){
            return this.props.spells
        }
        else{
            return this.props.spells
        }
    }

    renderItem(item){
        return(
            <TouchableHighlight onPress={() => console.log('pressed')}>
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

function mapStateToProps(state){
    //console.log('1')
    return{
        selectedIndex : 0,
            weapons : store.getState().items,
            spells: store.getState().spells,
            other: []
    }
}

function mapDispatchToProps(dispatch){
    //console.log('printing dispatch',dispatch)
    return{
        getItems: () => dispatch({type: 'getItems'}),
        buyItem: (item) => dispatch({type: 'buyItem', item: item}),
        //decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryScreen)