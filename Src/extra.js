import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React, { useState,Fragment } from 'react'
import DatePicker from 'react-native-date-picker'
import { windowwidth } from './Constant'
import { GToastContainer } from 'react-native-gtoast';
import { showToast } from 'react-native-gtoast';



const _onhandlefun= () => {
    showToast('Thank You for Your Order' , { id : 'toastbro'} );    
}


const extra = () => {
    const [date ,setdate ] = useState(new Date());
    const [open , setopen]=useState(false);
    const [d , setd]=useState('');

  return (
    <Fragment>
    

    <View style={styles.screen}>

        <Text style={{color:"black",fontSize:30,fontFamily:'Roboto-Bold',marginTop:30,marginLeft:20}}> Datetime Picker </Text>

        <TouchableOpacity onPress={() => {setopen(true)}}>
            <View style={{backgroundColor:'#4F772D',height:50,width:(windowwidth*90)/100,borderRadius:10,marginTop:40,alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"white",fontSize:24,fontFamily:'Roboto-Bold'}}> DatePicker </Text>
            </View>
        </TouchableOpacity>
        <DatePicker 
        modal
        open={open}
        date={date}
        // onDateChange={d}
        onConfirm={(date) => {
            setopen(false)
            setdate(date)
            console.log(date)
        }}
        onCancel={() => {
            setopen(false)
        }}
        maximumDate={new Date("2023-11-31")}
        mode='date'
        />

        <Text style={{color:"white",fontSize:24,fontFamily:'Roboto-Bold'}}> {d} </Text>

        <TouchableOpacity onPress={() => {_onhandlefun()}}>
            <View style={{backgroundColor:'#4F772D',height:50,width:(windowwidth*90)/100,borderRadius:10,marginTop:40,alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"white",fontSize:24,fontFamily:'Roboto-Bold'}}> Toast </Text>
            </View>
        </TouchableOpacity>
    </View>
    <GToastContainer paddingBottom={60} />
    </Fragment>

  )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    }
})

export default extra