import { StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'



const twomessagealert = () => {
    Alert.alert('Exit', ' Are You want to Exit', [
        {
            text:'cancel',
            onPress: () => {console.log('cancel')},
            style:'cancel'
        },
        {
            text:'ok',
            onPress: () => {console.log('Ok')}
        }
    ])
}

const threemessagealert = () => {
    Alert.alert('Exit', ' Are You want to Exit', [
        {
            text: 'Ask me later',
            onPress: () => {console.log('Ask me later')},
        },
        {
            text:'cancel',
            onPress: () => {console.log('cancel')},
            style:'cancel'
        },
        {
            text:'ok',
            onPress: () => {console.log('Ok')}
        },
    ],
    {
        cancelable:true,
        onDismiss: () => {
            console.log('dialog close')
        }
    })
}


const Alertex = () => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <TouchableOpacity style={{margin:30,backgroundColor:"#0077b6",justifyContent:'center',alignItems:'center',alignSelf:"center",width:"90%",height:60,borderRadius:10}}
        onPress={() => {
            twomessagealert()
        }}
      >
            <Text style={{color:"white",fontSize:20}}>  2 message Alert </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{margin:30,backgroundColor:"#0077b6",justifyContent:'center',alignItems:'center',alignSelf:"center",width:"90%",height:60,borderRadius:10}}
        onPress={() => {
            threemessagealert()
        }}
      >
            <Text style={{color:"white",fontSize:20}}>  3 message Alert </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Alertex

const styles = StyleSheet.create({})