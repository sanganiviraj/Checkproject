import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Mainhome from './Mainhome'
import Addtailer from './Addtailor'
import Addtailor from './Addtailor'
import { Provider } from 'react-redux';
import Tailorstore from './Store';
import Invoice from './Invoice';
// import Tailerstore from './Store';

const stack = createStackNavigator();

const Mainnavigation = () => {
  return (
    <Provider store={Tailorstore}>
    <NavigationContainer >
        <stack.Navigator>
            <stack.Screen component={Mainhome}  name='home' options={{headerTitleAlign:'center',headerStyle:{backgroundColor:"#8fb996"}}}/>
            <stack.Screen component={Addtailor}  name='addtailor' options={{headerTitleAlign:'center',headerTitle:"Tailor"}}/>
            <stack.Screen component={Invoice}  name='invoice' options={{headerTitleAlign:'center',headerTitle:"Invoice"}}/>
        </stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default Mainnavigation

const styles = StyleSheet.create({})