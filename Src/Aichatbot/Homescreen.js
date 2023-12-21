import { Image, ImageBackground, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import { windowwidth } from '../Constant'
import LinearGradient from 'react-native-linear-gradient'

// import { TouchableOpacity } from 'react-native-gesture-handler'

const Homescreen = () => {
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

          

        
        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <LinearGradient
            style={[styles.container,{marginTop:90}]}
            start={{x:0,y:0}}
            end={{x:1,y:1}} 
            colors={['#0D4854','#09181A']}
          >
              <Image style={[styles.img,{resizeMode:'contain'}]} source={require('../assets/images/gpt3.png')}/>

              <Text style={{fontSize:14,color:"white" ,fontFamily:'Roboto-Bold',alignSelf:'center',width:(windowwidth*55)/100,}}>
              ChatGPT works by trying to understand a prompt and then generating strings of words that it predicts will best answer the question. It's based on a large language model that predicts the next word in a series of words.
              </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <LinearGradient
            style={styles.container}
            start={{x:0,y:0}}
            end={{x:1,y:1}} 
            colors={['#0D4854','#09181A']}
          >
              <Image style={styles.img} source={{uri:"https://images.prismic.io/contrary-research/54299590-a68f-4afb-b50f-0926774af15d_midjourney+cover.png?auto=compress,format"}}/>

              <Text style={{fontSize:14,color:"white" ,fontFamily:'Roboto-Bold',marginTop:5,marginLeft:5,width:(windowwidth*50)/100,}}>
              The /describe command allows you to text to generate  possible prompts based on that image. Use the /describe command to explore new vocabulary and aesthetic movements.
              </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <LinearGradient
            style={styles.container}
            start={{x:0,y:0}}
            end={{x:1,y:1}} 
            colors={['#0D4854','#09181A']}
          >
              <Image style={styles.img} source={{uri:"https://s7d1.scene7.com/is/image/dmqualcommprod/getting-personal-with-on-device-ai?$QC_Responsive$&fmt=png-alpha&wid=500"}}/>

              <Text style={{fontSize:14,color:"white" ,fontFamily:'Roboto-Bold',marginTop:5,marginLeft:5,width:(windowwidth*50)/100}}>
              Get started with your personalized search results, text generation, image creation, and more when you try super AI today
              </Text>
          </LinearGradient>
        </TouchableOpacity>
        

        </ImageBackground>
        
    </View>
  )
}

export default Homescreen

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
  container:{
    width:(windowwidth*90)/100,
    height:150,
    borderRadius:10,
    alignSelf:'center',
    flexDirection:"row",
    marginTop:30
    // backgroundColor:"pink"
  },
  img:{
    height:140,
    width:120,
    alignSelf:'center',
    margin:5,
    borderRadius:10
  }
  
})