import { AppState, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Appstateex = () => {
    const appstate = useRef(AppState.currentState)
    const [appstatevisible , setappstatevisible]= useState(appstate.current)

    useEffect(() => {

        const statecheck = AppState.addEventListener("change",nextappstate => {
            if(appstate.current.match(/inactive|background/) && nextappstate==="active"){
                    console.log("app has come to foreground")
            }
    
            appstate.current = nextappstate
            setappstatevisible(appstate.current)
    
            console.log("Appstate:" , appstate.current)
        });

        return(
            statecheck.remove()
        )
    },[])

    // const _handleappstatechange = (nextappstate) => {
    //     if(appstate.current.match(/inactive|background/) && nextappstate==="active"){
    //             console.log("app has come to foreground")
    //     }

    //     appstate.current = nextappstate
    //     setappstatevisible(appstate.current)

    //     console.log("Appstate:" , appstate.current)
    // }

  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:"center"}}>
      <Text style={{color:'black' , fontSize:30}}> Appstate: {appstatevisible} </Text>
    </View>
  )
}

export default Appstateex

const styles = StyleSheet.create({})