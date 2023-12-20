import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const Animationex = () => {
    const animation = useRef( new Animated.Value(0)).current;
    const [btnclick , setbtnclick ] = useState(false);

    const startanimation = () =>{
        Animated.timing(animation,{
            toValue:btnclick ? 0 : 1,
            duration:1000,
            useNativeDriver:true
        }).start();
    }

  return (
    <View style={{flex:1,backgroundColor:"white"}}>

        <Animated.View style={[styles.box,{
            transform:[
                {translateY:animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,-100 ]
                })},
                {
                    rotate:animation.interpolate({
                        inputRange:[0,1],
                        outputRange:['0deg','360deg']
                    })
                },
                {translateX:animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,150 ]
                })},
                {scale:animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[1  ,0.5 ]
                })},
            ]
        },
        {
            borderRadius:btnclick?50:0
        }
        ]}>

        </Animated.View>

        <TouchableOpacity style={styles.button} onPress={() => {startanimation() 
            setbtnclick(!btnclick)}}>
            <Text style={{fontSize:20,color:"white",fontFamily:'Roboto-Bold'}}> Press Here!! </Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Animationex

const styles = StyleSheet.create({
    box:{
        height:100,
        width:100,
        backgroundColor:'yellow',
        marginTop:150,
        alignSelf:"center"
    },
    button:{
        height:70,
        width:"90%",
        backgroundColor:"black",
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center",
        alignSelf:'center',
        margin:50
    }
})