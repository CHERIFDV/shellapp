import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
const { width, height } = Dimensions.get("window");

export default class Splash extends Component {
    constructor(props){
        super(props);
        setTimeout(() => 
        {
            this.props.navigation.navigate("Home");
        }, 3000);
    }
    render() {
        return (
            <View style = {styles.container}>
                  <StatusBar style="auto" />
               <Image style = {styles.splash} source = { require('./48388691_862745473896003_5619695876223008768_n(1).png')}/>
               <Image style = {styles.splash1} source = { require('./62101853_620283588456403_631289106508283904_n(1).jpg')}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    splash:{
        justifyContent : 'center',
        height : height*0.2,
        width : width*0.4,
        marginBottom : 80,
        resizeMode: 'stretch'
    },
    splash1:{
        justifyContent : 'center',
        height : height*0.2,
        width : width*0.9,
        marginBottom : 80,
        resizeMode: 'stretch'
      
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height : '100%',
        width : '100%',
        backgroundColor: 'white',
      },


});