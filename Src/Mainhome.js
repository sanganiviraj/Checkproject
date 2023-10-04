import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { windowwidth } from './Constant';
import { useSelector } from 'react-redux';




const Mainhome = ({navigation}) => {
  // const navigation = useNavigation();
  // console.log('navigation : ',navigation);

  // const tailordatas = useSelector((state) => state.Tailordata);
  // console.log("Tailerdata : " , tailordatas);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Hello sir ,  </Text>


      <View style={styles.buttonbox}> 
      
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('addtailor')}}>
          <Text style={{color:'white',fontSize:24,fontFamily:'Roboto-Bold'}}> Add Tailor </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button,{borderTopRightRadius:30,borderBottomRightRadius:30,borderBottomLeftRadius:0,borderTopLeftRadius:0}]}>
          <Text style={{color:'white',fontSize:24,fontFamily:'Roboto-Bold' }}> Invoice </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
      flex:1,
      backgroundColor:"white"
    },
    title:{
      fontSize:30,
      fontWeight:'700',
      color:'black',
      marginTop:20,
      marginLeft:20
    },
    buttonbox:{
      marginVertical:20,
      width:(windowwidth*90)/100,
      height:60,
      borderRadius:30,
      backgroundColor:"#3a5a40",
      alignSelf:'center',
      position:'absolute',
      bottom:30,
      flexDirection:'row',
      justifyContent:'center',
      elevation:10
    },
    button:{
      borderTopLeftRadius:30,
      borderBottomLeftRadius:30,
      backgroundColor:"#588157",
      marginVertical:5,
      marginHorizontal:5,
      justifyContent:'center',
      alignItems:"center",
      width:(windowwidth*42)/100,
    }
})

export default Mainhome