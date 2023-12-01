import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { windowheight, windowwidth } from './Constant';
import { useSelector } from 'react-redux';

const Mainhome = ({navigation}) => {

  const tailordatas = useSelector((state) => state.Tailordata);
  const invoicelist = useSelector(state => state.Invoicedata);
  console.log("Tailerdata : " , tailordatas);
  console.log("invoicedata => ", invoicelist)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> All Tailor Details</Text>

      <View style={{height:(windowheight*40)/100}}> 

      {tailordatas=='' ? <Text style={{color:"grey",fontSize:14,fontFamily:'Roboto-Bold',marginLeft:20,justifyContent:"center"}}> Record Not Found </Text> :<FlatList 
        data={tailordatas}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          console.log('item : ',item)
          return(
            <TouchableOpacity onPress={() => {navigation.navigate('addtailor',{tailor : item })}}>
              <View style={styles.listbox} key={item.tid}>
                  <Text style={styles.titles}> Name : <Text style={styles.titlesdata}> {item.fullname} </Text> </Text> 
                  <Text style={styles.titles}> Age : <Text style={styles.titlesdata}> {item.age} </Text> </Text> 
                  <Text style={styles.titles}> Types : <Text style={styles.titlesdata}> {item.clothetype.join(' , ')} </Text> </Text> 
              </View>
              </TouchableOpacity>
          )
        }}
      />}

      </View>

      <Text style={styles.title}> Customer Details </Text>
      {invoicelist == '' ? 
        <Text style={{color:"grey",fontSize:14,fontFamily:'Roboto-Bold',marginLeft:20,justifyContent:"center"}}> Customer Not Found </Text>
      : 
      <FlatList
        data={invoicelist}
        keyExtractor={item => item.invoiceid}
        horizontal
        renderItem={({item}) => {
          console.log()
          const type = Object.keys(item.customfit)
          
          return(
            <TouchableOpacity onPress={() => {navigation.navigate('invoice', { updateitem : item })}}>
            <View style={styles.cutomerbox} key={item.invoiceid}>
              <Text style={styles.titles}> Name : <Text style={styles.titlesdata}> {item.customername} </Text> </Text> 
              <Text style={styles.titles}> tailor : <Text style={styles.titlesdata}> {item.value} </Text> </Text>
              <Text style={styles.titles}> Types : <Text style={styles.titlesdata}> {(Object.keys(item.customfit)).toString()} </Text> </Text>
            </View>  
            </TouchableOpacity>
          )
        }}

      />
      }


      <View style={styles.buttonbox}> 
      
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('addtailor')}}>
          <Text style={{color:'white',fontSize:24,fontFamily:'Ubuntu-Bold'}}> Add Tailor </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button,{borderTopRightRadius:30,borderBottomRightRadius:30,borderBottomLeftRadius:0,borderTopLeftRadius:0}]} onPress={() => {navigation.navigate('invoice')}}>
          <Text style={{color:'white',fontSize:24,fontFamily:'Ubuntu-Bold' }}> Invoice </Text>
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
      fontFamily:'YoungSerif-Regular',
      color:'black',
      marginTop:15,
      marginLeft:10,
      marginBottom:10
    },
    buttonbox:{
      marginVertical:20,
      width:(windowwidth*90)/100,
      height:60,
      borderRadius:30,
      backgroundColor:"#3a5a40",
      alignSelf:'center',
      position:'absolute',
      bottom:20,
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
    },
    listbox:{
      width:(windowwidth*90)/100,
      padding:10,
      borderRadius:10,
      backgroundColor:'#588157',
      alignSelf:'center',
      marginVertical:10
      
    },
    cutomerbox:{
      width:200,
      height:150,
      borderRadius:10,
      backgroundColor:"#588157",
      marginHorizontal:10,
      padding:5
    },
    titles:{
      fontSize:20,
      color:'white',
      fontFamily:'Roboto-Bold',
      marginVertical:3
    },
    titlesdata:{
      fontSize:18,
      color:'#ebf2fa',
      fontFamily:'Roboto-Medium'
    }
})

export default Mainhome