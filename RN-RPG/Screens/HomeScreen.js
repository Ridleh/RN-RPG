import React, {Component} from 'react'
import { Text, View, Dimensions, ImageBackground } from 'react-native'
import { Header, Button } from 'react-native-elements'
import {connect} from 'react-redux'

const {height, width} = Dimensions.get('window')

class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        console.log('componentDidMount - Home')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount - Home')
    }

    increaseCounter(){
        this.setState({ counter : this.state.counter + 1})
    }

    decreaseCounter(){
        this.setState({ counter : this.state.counter - 1})
    }


    render(){
        return(
            <View style={{paddingTop : 25}}>
                <ImageBackground
                source={require('../assets/Backgrounds/SampleBackgroundQuests.png')}
                style={{height: height-24, width: width}}>
                    <Header
                    containerStyle={{backgroundColor: '#585858',}}
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
                    centerComponent = {{text: 'HOME', style : {color : '#fff'}}}
                    />
                <Text>Home Screen</Text>
                <Button
                title='Increase'
                onPress={() => this.props.increaseCounter()}/>
                <Text>{this.props.counter}</Text>
                <Button
                title='Decrease'
                onPress={() => this.props.decreaseCounter()}/>
                </ImageBackground>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch){
    return{
        increaseCounter: () => dispatch({type: 'increaseCounter', name : 'test1'}),
        decreaseCounter: () => dispatch({type: 'decreaseCounter', name :'test2'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)