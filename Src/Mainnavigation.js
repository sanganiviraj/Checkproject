import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Mainhome from './Mainhome'
import Addtailer from './Addtailor'
import Addtailor from './Addtailor'
import { Provider } from 'react-redux';
import Tailorstore from './Store';
import Invoice from './Invoice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboardingscreen from './Onboarding';
// import Tailerstore from './Store';

const stack = createStackNavigator();

const Mainnavigation = () => {
  const [firstlaunch,setfirstlauch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadylaunched").then((value) =>{
      if(value == null) {
        AsyncStorage.setItem("alreadylaunched","true");
        setfirstlauch(true)
      }else{
        setfirstlauch(false)
      }
    })
  },[])
  
  return (
    <Provider store={Tailorstore}>
    <NavigationContainer >
        <stack.Navigator>
          {firstlaunch && <stack.Screen component={Onboardingscreen} name='onboardingscreen' options={{headerShown:false}} />}
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