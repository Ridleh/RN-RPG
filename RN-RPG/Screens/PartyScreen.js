import React, {Component} from 'react'
import { StyleSheet, Dimensions, Text, View, ImageBackground, Image, Button } from 'react-native'
import { Header, Overlay } from 'react-native-elements'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

const {height,width} = Dimensions.get('window')

export default class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            showOverlay: false
        }
        this.test = this.test.bind(this);
    }

    test(title){
        //console.log(title)
        this.setState({showOverlay : !this.state.showOverlay})
    }

    renderParty(){
        return(
            <View
            style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                onPress={() => this.test('title')}>
                <View
                style={styles.partyMemberContainer}>
                    <View
                    style={{
                        justifyContent: 'center'
                    }}>
                        <Text>Tyro</Text>
                    </View>
                    <Image
                    source={require('../assets/Characters/tyro.png')}
                    style={{
                        height: 75,
                        width: 40

                    }}/>
                    <View
                    style={{flexDirection:'column', justifyContent: 'center'}}>
                        <Text>level: 30/50</Text>
                        <Text>Health: 750/750</Text>
                        <Text>Mana: 300/300</Text>
                    </View>
                    

                </View>
                </TouchableOpacity>

                <TouchableHighlight
                onPress={() => this.test('title')}
                style={styles.partyMemberContainer}>
                    <Text>Test onPress</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.partyMemberContainer}>
                    <Text>Hello</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.partyMemberContainer}>
                    <Text>Hello</Text>
                </TouchableHighlight>
            </View>
        );
    }

    renderOverlay(){
        return(
            <Overlay 
                    overlayStyle={{flexDirection: 'column', backgroundColor: 'chocolate', borderColor: 'black', borderRadius: 20, borderWidth: 5}}
                    isVisible={this.state.showOverlay}
                    onBackdropPress={() => this.prepareOverlay()}>
                        <View
                        style={{flex: 9}}>
                        <Text>Quest description blah blah</Text>
                        </View>
                        <View
                        style={{flex: 1}}>
                            <Button
                            onPress={() => this.prepareOverlay()}
                            title='BEGIN QUEST'/>
                        </View>
            </Overlay>
        );
    }

    render(){
        return(
            <View style={{paddingTop : 24}}>
                <ImageBackground
                source={require('../assets/Backgrounds/SampleBackgroundQuests.png')}
                style={{height: height-24, width: width}}>
                    <Header
                    containerStyle={{backgroundColor: '#964b00',}}
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
                    centerComponent = {{text: 'PARTY', style : {color : '#fff'}}}
                    />
                

                <View
            style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <TouchableOpacity
                onPress={() => this.test('title')}>
                <View
                style={styles.partyMemberContainer}>
                    <View
                    style={{
                        justifyContent: 'center'
                    }}>
                        <Text>Tyro</Text>
                    </View>
                    <Image
                    source={require('../assets/Characters/tyro.png')}
                    style={{
                        height: 75,
                        width: 40

                    }}/>
                    <View
                    style={{flexDirection:'column', justifyContent: 'center'}}>
                        <Text>level: 30/50</Text>
                        <Text>Health: 750/750</Text>
                        <Text>Mana: 300/300</Text>
                    </View>
                    

                </View>
                </TouchableOpacity>

                <TouchableHighlight
                onPress={() => this.test('title')}
                style={styles.partyMemberContainer}>
                    <Text>Test onPress</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.partyMemberContainer}>
                    <Text>Hello</Text>
                </TouchableHighlight>

                <TouchableHighlight
                style={styles.partyMemberContainer}>
                    <Text>Hello</Text>
                </TouchableHighlight>
            </View>
            <Overlay 
                    overlayStyle={{flexDirection: 'column', backgroundColor: 'chocolate', borderColor: 'black', borderRadius: 20, borderWidth: 5}}
                    isVisible={this.state.showOverlay}
                    onBackdropPress={() => this.test('title')}>
                        <View style={{flex:1}}>
                        <View
                        style={{flex: 9}}>
                        <Text>Quest description blah blah</Text>
                        </View>
                        <View
                        style={{flex: 1}}>
                            <Button
                            onPress={() => this.test('title')}
                            title='SAVE'/>
                        </View>
                        </View>
            </Overlay>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    partyMemberContainer: {
        borderColor: 'black', 
        borderRadius: 15, 
        borderWidth: 5,
        height: (height/5) * .60, 
        width: '90%', 
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})