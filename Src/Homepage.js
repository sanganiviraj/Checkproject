import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'

const Data = [
    {
        name:'Peter parkor',
        value:'1'
    },
    {
        name:'Andrew parkor',
        value:'2'
    },
    {
        name:'Tom Holland',
        value:'3'
    },
    {
        name:'Robert Partison',
        value:'4'
    },
]


const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

const Homepage = () => {
    const [value,setvalue]=useState(null);
    const [isFocus,setisFocus]=useState(false);
    

  return (
    <View style={styles.screen}>
      <Text style={{alignSelf:'center',color:'black',marginVertical:20,fontSize:30}}> DropDown list </Text>

        <Dropdown
            style={[styles.box,isFocus && {borderColor:'blue'}]}
            placeholderStyle={{fontSize:16,color:'black',marginLeft:10}}
            selectedTextStyle={{fontSize:16,color:'black',marginLeft:10}}
            itemTextStyle={{color:'black'}}
            data={Data}
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder={!isFocus ? 'select Tailer' : '...'}
            onChange={item => {setvalue(item.name),setisFocus(false)}}
            onFocus={() => setisFocus(true)}
            onBlur={() => setisFocus(false)}
        />

        <Text style={{alignSelf:'center',color:'black',marginVertical:20,fontSize:30}}> CheckBox list </Text>

        


    </View>
  )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    },
    box:{
        width:(windowwidth*60)/100,
        height:50,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'grey',
        alignSelf:'center',
        
    }
})

export default Homepage