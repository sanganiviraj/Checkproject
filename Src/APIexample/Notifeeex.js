import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import notifee, { AndroidStyle } from '@notifee/react-native';
import { windowwidth } from '../Constant';


const displaynotification = async() => {
    
        // Request permissions (required for iOS)
        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });
    
        // Display a notification
        await notifee.displayNotification({
          title: 'Notification Title',
          body: 'Main body content of the notification',
          android: {
            channelId,
            
            // pressAction is needed if you want the notification to ospen the app when pressed
            pressAction: {
              id: 'default',
            },
            style: { type: AndroidStyle.BIGPICTURE, picture: 'https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/07/13220529/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg' },
          },
        });
}



const Notifeeex = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
       <TouchableOpacity style={{width:(windowwidth*80)/100,backgroundColor:"#588157",borderRadius:12,height:60,marginVertical:20,alignSelf:"center",justifyContent:"center",alignItems:"center"}}
        onPress={() => {displaynotification()}} >

            <Text style={{color:'white',fontSize:20}}>
                Display Notification
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notifeeex

const styles = StyleSheet.create({})