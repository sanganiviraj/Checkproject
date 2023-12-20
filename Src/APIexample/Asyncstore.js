import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { windowwidth } from '../Constant'
import AsyncStorage from '@react-native-async-storage/async-storage'

let datas = { name : 'viraj ' , age:'20'}
let datas2 = { name : 'meet ' , gender:'male'}

const Asyncstore = () => {

    const [data,setdata]=useState('')   

    const savedata = async () => {
        // let name1=['name','viraj'];
        // let name2=['surname','sangani'];

        try{
            // await AsyncStorage.setItem('data' , JSON.stringify(datas));
            // await AsyncStorage.multiSet([name1,name2]);
            await AsyncStorage.setItem("data",data);
            console.log('saved successful')
        }catch(e){

        }
    }

    const Getdata = async () => {
        try{
            // const name = await AsyncStorage.multiGet(['name','surname']);
            const name = await AsyncStorage.getItem('data');
            console.log('name:',JSON.stringify(name))
        }catch(e){

        }
    }

    const removitem = async () => {
        try{
            // const name = await AsyncStorage.multiGet(['name','surname']);
            const name = await AsyncStorage.removeItem('data');
            console.log('removed')
        }catch(e){

        }
    }


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Text style={{color:"black",fontSize:24,fontFamily:'Roboto-Bold',alignSelf:'center',marginTop:30}}> Asyncstore </Text>

      <TextInput 
      style={{width:(windowwidth*90)/100,borderRadius:10,borderWidth:1,marginVertical:30,alignSelf:'center',color:'black'}}
      placeholder='Enter Name'
      placeholderTextColor="black"
      onChangeText={(text) => setdata(text)}
      value={data}
      />

      <TouchableOpacity style={{width:(windowwidth*80)/100,backgroundColor:"#588157",borderRadius:12,height:60,marginVertical:20,alignSelf:"center",justifyContent:"center",alignItems:"center"}}
        onPress={() => {savedata()}}
      >

            <Text style={{color:'white',fontSize:20}}>
                Setdata
            </Text>
      </TouchableOpacity>


      <TouchableOpacity style={{width:(windowwidth*80)/100,backgroundColor:"#588157",borderRadius:12,height:60,marginVertical:20,alignSelf:"center",justifyContent:"center",alignItems:"center"}}
        onPress={() => {Getdata()}}
      >

            <Text style={{color:'white',fontSize:20}}>
                Getdata
            </Text>
      </TouchableOpacity>


      <TouchableOpacity style={{width:(windowwidth*80)/100,backgroundColor:"#588157",borderRadius:12,height:60,marginVertical:20,alignSelf:"center",justifyContent:"center",alignItems:"center"}}
        onPress={() => {removitem()}}
      >

            <Text style={{color:'white',fontSize:20}}>
                Remove
            </Text>
      </TouchableOpacity>
    </View>

  )
}

export default Asyncstore

const styles = StyleSheet.create({})