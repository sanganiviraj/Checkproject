import { Alert, BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const backhandlerex = () => {

    useEffect(() => {
            const exitscreen = () => {
                Alert.alert("Hold on ", ' Are you sure to want go Back ? ',
                [
                    {
                        text:'Cancel',
                        onPress:  () => null , 
                        style: 'cancel'
                    },
                    {
                        text:'Yes',
                        onPress: () => BackHandler.exitApp()
                    }
                ]);
                return true;
            }

            const backhandler = BackHandler.addEventListener(
                'hardwareBackPress',exitscreen
            )

            return() => backhandler.remove()
    },[])


  return (
    <View style={{flex:1,backgroundColor:"white",justifyContent:'center',alignItems:"center" }}>
      <Text style={{fontSize:24,color:'black'}}>backhandlerex</Text>
    </View>
  )
}

export default backhandlerex

const styles = StyleSheet.create({})