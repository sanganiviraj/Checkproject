import { StyleSheet, Text, TextInputBase, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { windowwidth } from './Constant';
// import  Stagger  from '@animatereactnative/stagger';
// import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';

const extra2 = () => {
  // const sheetRef = useRef(null);

  return (
    // <Stagger
    // // stagger={50}
    // // duration={300}
    // // exitDirection={-1}
    // // entering={() => ZoomInEasyDown.springify()}
    // // exiting={() => FadeOutDown.springify()}
    // // style={{
    // //     flex:1
    // // }}
    // >
      <View 
      style={{flex:1,backgroundColor:'white'}}
      >

        <TouchableOpacity style={{height:60,width:(windowwidth*90)/100,backgroundColor:'pink',borderRadius:10,elevation:5,justifyContent:'center',alignItems:'center',marginTop:50,alignSelf:'center'}}>
          <Text style={{color:'black',fontSize:26,}}> Press Here!! </Text>

        </TouchableOpacity>

        {/* <BottomSheet> 
        <Text style={{color:'black',fontSize:26,}}> Hello world!! </Text>
        </BottomSheet> */}
      </View>

    
      

    // </Stagger>
  )
}

export default extra2

const styles = StyleSheet.create({})