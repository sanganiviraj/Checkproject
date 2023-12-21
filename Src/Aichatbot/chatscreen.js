import { StyleSheet, Text, View,ImageBackground ,Image, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { BlurView } from '@react-native-community/blur'
import { dummyMessages } from './demodata'
import LinearGradient from 'react-native-linear-gradient'
import Voice from '@react-native-community/voice';
import { windowwidth } from '../Constant'
// import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'




const chatscreen = () => {
  const [message , setmessage] = useState(dummyMessages);
  const [ recording , setrecording ] =useState(false)
  const [speaking , setspeaking] = useState(true)
  const [result , setresult ] =useState('');

  const speechStartHandler = () => {
    console.log("speech start handler")
  }

  const speechEndHandler = () => {
    console.log("speech end handler")
  }

  const speechResultHandler = (e) => {
    console.log("speech Result handler")
    const text = e.value[0];
    setresult(text)
  }

  const speechErrorHandler = (e) => {
    console.log("speech Error" , e)
  }

  const Startrecording = async( ) => {
    console.log('hi');
    setrecording(true);
    try{
      await Voice.start('en-US'); //english language
    }
    catch(er){
      console.log('error : ' , er);
    }
  }

  const stopspeechrecording = async( ) => {
    try{
      await Voice.stop();
      setrecording(false)
    }
    catch(er){
      console.log(er);
    }
  }

  const _stophandlerecording = () =>{
    console.log('press!')
    setspeaking(false)
  }
  
  useEffect(() => {
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  },[])

  console.log('Final Result : ' , result)

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


                <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                      {
                        recording ? (
                              <TouchableOpacity onPress={() => {stopspeechrecording()}}>
                                <Image 
                                  style={styles.micimg}
                                  source={{uri:"https://cdn-icons-png.flaticon.com/512/9667/9667808.png"}}
                                />
                            </TouchableOpacity>
                        ):
                        (
                            <TouchableOpacity onPress={() => {Startrecording()}}>
                              <Image 
                                style={styles.micimg}
                                source={{uri:"https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/97-512.png"}}
                              />
                            </TouchableOpacity>
                        )
                      }
                        
                      {
                        message.length>0 && (
                          <TouchableOpacity
                            style={{height:50,width:80,backgroundColor:"#FAA0A0",alignItems:'center',justifyContent:"center",position:'absolute',bottom:10,left:20,borderRadius:10}}
                            onPress={() => {
                              _stophandlerecording()
                            }}
                          > 
                              <Text style={{color:"white",fontSize:14}}> Stop </Text>
                          </TouchableOpacity>
                        )
                      }
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