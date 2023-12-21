import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowwidth } from '../Constant'

const Welcomescreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1}} source={require('../assets/images/ai2.png')}>

      <Text style={{fontSize:30,fontFamily:'Roboto-Bold',color:'white',marginTop:600,alignSelf:'center',elevation:6}}>
            Welcome To VirtualBuddy
      </Text>

      <Text style={{fontSize:20,fontFamily:'Ubuntu-Bold',color:'#BDBDBD',marginTop:20,alignSelf:'center',elevation:6,textAlign:'center'}}>
            Make Your word very easily and faster with a Virtualbuddy.....
      </Text>

      <TouchableOpacity style={{width:(windowwidth*90)/100,height:60,alignSelf:'center',marginTop:30,backgroundColor:"#6723F5",borderRadius:10,alignItems:'center',justifyContent:'center'}}
        onPress={() => {navigation.replace('homescreen')}}
      >
        <Text style={{fontSize:20,fontFamily:'Nunito-Bold',color:'white',alignSelf:'center'}}>Get Started
        </Text>
      </TouchableOpacity>

      </ImageBackground>
    </View>
  )
}

export default Welcomescreen

const styles = StyleSheet.create({})