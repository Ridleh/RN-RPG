import React, {Component} from 'react'
import { Text, View, ImageBackground, FlatList } from 'react-native'
import {Header, Button, ListItem, Overlay} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            stamina : 100,
            questCategorySelected : false,
            showOverlay: false,
            list: [
                {
                    name: 'Forest Outskirts I',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                  },
                  {
                    name: 'Forest Outskirts II',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                  },
            ]
        }
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            containerStyle={{borderRadius: 12, marginBottom: 10}}
            title={item.name}
            subtitle='Stamina: 20   Difficulty: 10'
            leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            onPress={() => this.renderOverlay()}
        />
    );

    renderOverlay(){
        this.setState({showOverlay : !this.state.showOverlay})
    }

    renderStamina(){
        return(
            <View>
                <Text>STAMINA: {this.state.stamina}</Text>
            </View>
        );
    }

    renderQuestCategories = ({}) => {
        if(!this.state.questCategorySelected){
            return(
                <View
                style={{flex: 1, paddingHorizontal: 10}}>
                    <Button
                    onPress={() => this.showSubQuests('Grassy Plains')}
                    buttonStyle={{height: 100 , borderRadius: 12, marginBottom: 30, backgroundColor: 'green'}}
                    title='Grassy Plains'/>
                    <Button
                    buttonStyle={{height: 100 , borderRadius: 12, marginBottom: 30, backgroundColor: '#d2691e'}}
                    title='Rocky Mountains'/>
                    <Button
                    buttonStyle={{height: 100 , borderRadius: 12, marginBottom: 30}}
                    title='Swifty Waters'/>
                    
                </View>
            );
        }
        else{
            return(
                <View
                style={{flex: 1, paddingHorizontal: 10}}>
                    <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.list}
                    renderItem={this.renderItem}
                    />
                <Button
                    buttonStyle={{
                    alignSelf: 'flex-end',
                    position: 'absolute',
                    bottom: 85,
                    left: -35,
                    width: 120, 
                    height: 120 , 
                    borderRadius: 100, 
                    marginBottom: 30, 
                    backgroundColor: '#964b00'
                    }}
                    title='Go Back'
                    onPress={() => this.setState({ questCategorySelected : false})}
                    />
                </View>
            );
        }
    }

    showSubQuests(title){
        console.log(title)
        this.setState({questCategorySelected : true})
    }

    render(){
        return(
            <View style={{paddingTop : 25}}>
                <Header
                    containerStyle={{backgroundColor: '#964b00', paddingBottom: 20}}
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
                    centerComponent = {{text: 'QUESTS', style : {color : '#fff'}}}
                    rightComponent={this.renderStamina()}
                />
                
                <ImageBackground
                source={require('../assets/Backgrounds/SampleBackgroundQuests.png')}
                style={{paddingTop: 30, height: '100%', width: '100%'}}>
                    <this.renderQuestCategories/>
                    <Overlay 
                    overlayStyle={{flexDirection: 'column', backgroundColor: 'chocolate', borderColor: 'black', borderRadius: 20, borderWidth: 5}}
                    isVisible={this.state.showOverlay}
                    onBackdropPress={() => this.renderOverlay()}>
                        <View
                        style={{flex: 9}}>
                        <Text>Quest description blah blah</Text>
                        </View>
                        <View
                        style={{flex: 1}}>
                            <Button
                            onPress={() => this.renderOverlay()}
                            title='BEGIN QUEST'/>
                        </View>
                        
                    </Overlay>
                </ImageBackground>
               
            </View>
        )
    }
}