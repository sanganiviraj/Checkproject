import { StyleSheet, Text, View,ImageBackground ,Image, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { BlurView } from '@react-native-community/blur'
import { dummyMessages } from './demodata'
import LinearGradient from 'react-native-linear-gradient'
import { windowwidth } from '../Constant'
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

const chatscreen = () => {
  const [message , setmessage] = useState(dummyMessages);
  return (
    <View style={{flex:1}}>
       <ImageBackground
          style={{flex:1}}
          source={require('../assets/images/bg.webp')}
        >
          
          <BlurView
            style={styles.blurviewstyle}
            blurType="black"
            blurAmount={20}
            reducedTransparencyFallbackColor="white"
        />

        <Image 
          style={styles.img}
          source={{uri:"https://cdn-icons-png.flaticon.com/512/4712/4712109.png"}}
        />
        
          {
            message.length > 0 ?
            (
              <View>
                <Text style={{fontSize:20,color:'white',fontFamily:"Roboto-Bol",marginVertical:10,marginLeft:20}}> Assistant </Text>
                <LinearGradient
                  style={styles.box}
                  start={{x:0,y:0}}
                  end={{x:1,y:1}} 
                  colors={['#0D4854','#09181A']}
                >
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                    >
                        {
                          message.map((message , index) => {
                              if(message.role=="assistant"){
                                  if(message.content.includes('https')){
                                    //  image generator
                                      return(
                                      <View style={{flexDirection:'row' ,justifyContent:'flex-start'}}>
                                          <View style={[styles.imgview,{borderTopLeftRadius:0}]}>
                                              <Image 
                                                style={styles.aiimg} 
                                                source={{uri : message.content}}
                                              />
                                          </View>

                                      </View>
                                      )
                                  }else{
                                    // text response
                                    return(
                                      <View style={{flexDirection:"row" , justifyContent:'flex-start'}}>
                                          <View style={[styles.textbox,{borderTopLeftRadius:0,backgroundColor:'#95d5b2'}]}>
                                              <Text style={{color:'black'}}>
                                                    {message.content}
                                              </Text>
                                          </View>
    
                                      </View>
                                    )
                                  }
                              }
                              else{
                                //user input
                                return(
                                  <View style={{flexDirection:"row" , justifyContent:'flex-end'}}>
                                      <View style={[styles.textbox,{borderTopRightRadius:0}]}>
                                          <Text style={{color:'black'}}>
                                                {message.content}
                                          </Text>
                                      </View>

                                  </View>
                                )
                              }
                            }) 
                        }
                    </ScrollView>

                </LinearGradient>


                <View style={{justifyContent:'center',alignItems:'center'}}>

                        <TouchableOpacity>
                          <Image 
                            style={styles.micimg}
                            source={require('../assets/images/gif.gif')}
                          />
                        </TouchableOpacity>

                </View>
              </View>

            )
            :<></>
          }
        </ImageBackground>
    </View>
  )
}

export default chatscreen

const styles = StyleSheet.create({
    blurviewstyle : {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
        // height:400,
        // width:200
      },
      img:{
        height:100,
        width:100,
        alignSelf:'center',
        marginTop:80
      },
      box:{
        width:(windowwidth*90)/100,
        height:450,
        borderRadius:10,
        alignSelf:'center',
        paddingHorizontal:10
      },
      textbox:{
        padding:10,
        backgroundColor:'white',
        borderRadius:10,
        margin:5,
        marginVertical:10
      },
      aiimg:{
          width:130,
          height:130,
          borderRadius:10
      },
      imgview:{
        backgroundColor:"#95d5b2",
        padding:5,
        borderRadius:10,
        margin:5,
        marginVertical:10
      },
      micimg:{
        height:80,
        width:80
      }
})