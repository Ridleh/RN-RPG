import React, {Component} from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends Component {

    componentDidMount(){
        console.log('componentDidMount - Home')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount - Home')
    }


    render(){
        return(
            <View style={{paddingTop : 25}}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}