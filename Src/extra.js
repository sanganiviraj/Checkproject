import { StyleSheet, Text, View , TouchableOpacity,Image     } from 'react-native'
import React, { useState,Fragment,useRef } from 'react'
import DatePicker from 'react-native-date-picker'
import { GToastContainer } from 'react-native-gtoast';
import { showToast } from 'react-native-gtoast';
import Video from 'react-native-video';
import { windowheight, windowwidth } from './Constant';
// import Slider from '@react-native-community/slider';
import Slider from "react-native-a11y-slider";
// import  {Stagger}  from '@animatereactnative/stagger';
// import Popover from 'react-native-popover-view';
// import { ZoomInEasyDown,FadeOutDown } from 'react-native-reanimated';



const _onhandlefun= () => {
    showToast('Thank You for Your Order' , { id : 'toastbro'} );    
}


const extra = () => {
    const [date ,setdate ] = useState(new Date());
    const [open , setopen]=useState(false);
    const [d , setd]=useState('');
    const [clickable,setclickable]=useState(false);
    const [pause,setpause]=useState(false)
    const [progress , setprogress ]= useState(null)
    const ref = useRef()
    const [slidervalue , setslidervalue]= useState(10);

    // let home = <Icon name="home" size={20} color="black"/>

    const format = seconds => {
        let mins = parseInt(seconds / 60)
          .toString()
          .padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
      };

  return (
    <Fragment>
    <Stagger
        stagger={50}
        duration={300}
        exitDirection={-1}
        entering={() => ZoomInEasyDown.springify()}
        exiting={() => FadeOutDown.springify()}
        style={ styles.screen}
    >
    
    
    {/* <View style={ }> */}


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
            onConfirm={(date) => {
                setopen(false)
                setdate(date)
                setd(date.toString())
            }}
            onCancel={() => {
                setopen(false)
            }}
            maximumDate={new Date("2023-11-31")}
            mode='date'
        />

        {d && <Text style={{color:"black",fontSize:24,fontFamily:'Roboto-Bold'}}> {d} </Text>}

        <TouchableOpacity onPress={() => {_onhandlefun()}}>
            <View style={{backgroundColor:'#4F772D',height:50,width:(windowwidth*90)/100,borderRadius:10,marginTop:40,alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:"white",fontSize:24,fontFamily:'Roboto-Bold'}}> Toast </Text>
            </View>
        </TouchableOpacity>

        {/* <Text style={ds{color:"black",fontSize:30,fontFamily:'Roboto-Bold',marginTop:30,marginLeft:20}}> Videoplayer </Text> */}
        
        {/* <TouchableOpacity style={{width:'100%'}} onPress={() => { setclickable(true) }}>
        <Video
            source={{uri : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
            style={{height:windowheight,width:windowwidth}}
            paused ={pause}
            ref={ref}
            onProgress={(x) => {
                setprogress(x)
            }}
        />
        {
            clickable && <TouchableOpacity style={{width:"100%",height:260,position:'absolute',backgroundColor:'rgba(0,0,0,.3)',justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:200,alignSelf:'center',height:100,marginBottom:50}}>
                        <TouchableOpacity onPress={() => { ref.current.seek(progress.currentTime - 10)}}>
                            <Image  source={{uri : "https://static-00.iconduck.com/assets.00/rewind-30-icon-1694x2048-cfu4a8uq.png"}} style={{height:25,width:25}}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setpause(!pause) }}>
                            <Image  source={{uri : pause ? "https://cdn-icons-png.flaticon.com/512/0/375.png" :"https://cdn-icons-png.flaticon.com/512/61/61180.png"}} style={{height:30,width:30}}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => {ref.current.seek(progress.currentTime + 10)}}>
                            <Image  source={{uri : "https://cdn.iconscout.com/icon/free/png-256/free-30-forward-1780148-1512993.png?f=webp"}} style={{height:40,width:40}}/>
                        </TouchableOpacity>
                </View>
                <View style={{ width:windowwidth , flexDirection:'row' , justifyContent:'center',alignItems:'center' , marginBottom:-70}}>
                    <Text style={{ color:'white' }}> {format(progress.currentTime)} </Text>

                    <Slider
                        style={{width: 250, height: 40}}
                        minimumValue={0}
                        maximumValue={progress.seekableDuration}
                        minimumTrackTintColor="#FFFFFF" 
                        maximumTrackTintColor="#fff"
                        onValueChange={(x)=> {
                            ref.current.seek(x);
                        }}
                    />

                    <Text style={{ color:'white' }}> {format(progress.seekableDuration)} </Text>
                </View>
            </TouchableOpacity>
        }
        </TouchableOpacity> */}

        
        <View style={{margin:40}}></View>

        <Text style={{color:'black',fontSize:30}}> Slider: </Text>

            <Slider 
            min={1}
            max={100}
            values={slidervalue}
            markerColor='red'
            onChange={(value) => setslidervalue(value)}
            onSlidingStart={50}
            labelTextStyle={{color:'blue'}}
            style={{width:(windowwidth*85)/100,alignSelf:'center'}}
            />

        
        <Text style={{color:'black',fontSize:20}}> {slidervalue} </Text>

        <Popover
        // placement={'left'}
            from={(
                <TouchableOpacity>
                <Text style={{color:'black'}}>Press here to open popover!</Text>
                </TouchableOpacity>
            )}>
            {/* <Text style={{color:'black'}}>This is the contents of the popover</Text> */}
            <View style={{height:50,width:100,borderRadius:20,elevation:10,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,color:'black'}}> Hello world </Text>
            </View>

            </Popover>

    {/* </View>  */}

    
    
    <GToastContainer paddingBottom={60} /> 
     
    </Stagger>
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