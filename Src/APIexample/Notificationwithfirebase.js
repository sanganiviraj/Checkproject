import { StyleSheet, Text, View , Alert } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging';

const Notificationwithfirebase = () => {
    useEffect(() => {
        getdevicetoken()
    },[])

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived in foreground!', JSON.stringify(remoteMessage));
        }) ; 
    })

    const getdevicetoken =async ( ) => {
        let token = await messaging().getToken()
        console.log(token);
    }
  return (
    <View>
      <Text>Notificationwithfirebase</Text>
    </View>
  )
}

export default Notificationwithfirebase

const styles = StyleSheet.create({})