import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcomescreen from './welcomescreen';
import Homescreen from './Homescreen';
import { BlurView } from '@react-native-community/blur';
import {Icon} from 'react-native-vector-icons';


const stack = createStackNavigator();

const MyIcon = () => {
  return (
    <Image
      source={require('../assets/images/back.png')}
      style={{ width: 30, height: 30,margin:15 }}
    />
  );
};

const Allscreen = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
            <stack.Screen component={Welcomescreen} name='welcomescreen' options={{headerShown:false}}/>
            <stack.Screen component={Homescreen} name='homescreen' 
            options={{
              headerShown:true,
              headerTitle:"Home",
              headerTransparent:true,
              headerTintColor:'white',
              headerTitleAlign:'center',
              headerTitleStyle:{color:"white"},
              headerLeft: MyIcon
              }}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default Allscreen

