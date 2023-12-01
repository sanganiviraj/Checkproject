import { Pressable, StyleSheet, Text, View, TouchableOpacity , TextInput} from 'react-native'
import React,{useEffect, useState} from 'react'
import { windowwidth } from './Constant'
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Iconicons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { Add_Tailerdata, update_Tailordata } from './actions'

const Addtailor = ({route,navigation}) => {
  const [firstname,setfirstname] = useState('');
  const [secondname,setsecondname] = useState('');
  const [age,setage] = useState('');
  const [mobilenumber,setmobilenumber] = useState('');
  const [shirt, setShirt] = useState();
  const [pant, setPant] = useState();
  const [kurta, setKurta] = useState();
  const [suit, setSuit] = useState();

  const tdata = route.params?.tailor || {};

  const dispatch = useDispatch();

  useEffect(() =>{
    if(tdata.fullname){
        const [firstpart , ...lastPartArray] = tdata.fullname.split(' ');
        const lastPart = lastPartArray.join(' ');
        setfirstname(firstpart);
        setsecondname(lastPart);
    }
    if(tdata.age) setage(tdata.age);
    if(tdata.mobilenumber) setmobilenumber(tdata.mobilenumber);

    if(tdata.clothetype){
      setShirt(tdata.clothetype.includes('shirt'));
      setKurta(tdata.clothetype.includes('kurta'));
      setPant(tdata.clothetype.includes('pant'));
      setSuit(tdata.clothetype.includes('suit'));
    }
  },[])

  const Checkbox = (props) => {
    const iconname = props.ischecked ? "checkmark-circle" :  "checkmark-circle-outline";
    return(
        <View >
              <Pressable onPress= {props.onpress} style={{flexDirection:'row',alignItems:"center",marginHorizontal:10,marginTop:10,width:80}}>
                  <Iconicons name={iconname} color="black" size={24}/>

                  <Text style={{fontSize:20,color:"black",fontFamily:'Roboto-Medium'}}> {props.title} </Text>
              </Pressable>

              
        </View>
    )
  }

  const _onhandlesubmit = () => {
    let clothetype = [];

    if(shirt){
      clothetype.push('shirt')
    }
    if(pant){
      clothetype.push('pant')
    }
    if(kurta){
      clothetype.push('kurta')
    }
    if(suit){
      clothetype.push('suit')
    }

    let fullname = firstname + " " + secondname;
    console.log('fulname : ' , fullname);

    if(tdata.tid === undefined){
      dispatch(Add_Tailerdata(fullname,age,mobilenumber,clothetype));
    }else{
      console.log('updatetailordata');
      dispatch(update_Tailordata(tdata.tid,fullname,age,mobilenumber,clothetype));
    }

    navigation.goBack('home')

  }


  return (
    <View style={styles.screen}>
      <Text style={{fontSize:24,color:'black',fontFamily:'Roboto-Bold',marginTop:20,marginLeft:20}}>Fill Up The Form</Text>
      <View style={{marginVertical:2,width:200,borderWidth:1,borderColor:'black',marginTop:5}}></View>

      <View style={{flex:1,marginVertical:30,marginHorizontal:20}}>

        <Text style={styles.titlestyle}> Firstname </Text>
        <View style={{width:(windowwidth*90)/100,height:50,marginTop:-5,borderBottomColor:"#2F3E46",borderBottomWidth:1,alignItems:'center',flexDirection:'row'}}>
            <Icon name="user" size={25} color='black' />

            <TextInput  
              placeholder='Enter First name'
              placeholderTextColor="#52796F"
              style={styles.inputstyle}
              maxLength={30}
              onChangeText={(text) => setfirstname(text)}
              value={firstname}
              cursorColor="black"
            />
        </View>

        <Text style={[styles.titlestyle,{marginTop:20}]}> Lastname </Text>
        <View style={{width:(windowwidth*90)/100,height:50,marginTop:-5,borderBottomColor:"#2F3E46",borderBottomWidth:1,alignItems:'center',flexDirection:'row'}}>
            <Icon2 name="doubleright" size={25} color='black' />

            <TextInput  
              placeholder='Enter Last name'
              placeholderTextColor="#52796F"
              style={styles.inputstyle}
              maxLength={30}
              onChangeText={(text) => setsecondname(text)}
              value={secondname}
              cursorColor="black"
            />
        </View>

        <Text style={[styles.titlestyle,{marginTop:20}]}> Age </Text>
        <View style={{width:(windowwidth*90)/100,height:50,marginTop:-5,borderBottomColor:"#2F3E46",borderBottomWidth:1,alignItems:'center',flexDirection:'row'}}>
            <Icon name="man" size={25} color='black' />

            <TextInput  
              placeholder='Enter Your Age'
              placeholderTextColor="#52796F"
              style={styles.inputstyle}
              maxLength={30}
              onChangeText={(text) => setage(text)}
              value={age}
              cursorColor="black"
              inputMode='numeric'
            />
        </View>

        <Text style={[styles.titlestyle,{marginTop:20}]}> Mobilenumber </Text>
        <View style={{width:(windowwidth*90)/100,height:50,marginTop:-5,borderBottomColor:"#2F3E46",borderBottomWidth:1,alignItems:'center',flexDirection:'row'}}>
            <Icon2 name="phone" size={25} color='black' />

            <TextInput  
              placeholder='Enter Mobilenumber'
              placeholderTextColor="#52796F"
              style={styles.inputstyle}
              maxLength={30}
              onChangeText={(text) => setmobilenumber(text)}
              value={mobilenumber}
              cursorColor="black"
              inputMode='numeric'
            />
        </View>

        <Text style={[styles.titlestyle,{marginTop:30}]}> Types </Text>
        <View style={styles.checkcontainer}>
          <Checkbox 
            onpress={() => {setShirt(!shirt)}}
            title="Shirt"
            ischecked={shirt}
          />

          <Checkbox 
            onpress={() => {setPant(!pant)}}
            title="Pant"
            ischecked={pant}
          />
          
        </View>

        <View style={styles.checkcontainer}>

            <Checkbox   
              onpress={() => {setKurta(!kurta)}}
              title="Kurta"
              ischecked={kurta}
            />

            <Checkbox 
              onpress={() => {setSuit(!suit)}}
              title="Suit"
              ischecked={suit}
            />
        </View>

        <TouchableOpacity style={styles.buttonstyle} onPress={ () => {_onhandlesubmit()}}>
            <Text style={{fontSize:24,fontFamily:'Ubuntu-Bold',color:'white'}}> Submit </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#c0ccc3'
    },
    titlestyle:{
      color:"#2F3E46",
      fontSize:14,
      fontFamily:'Roboto-Bold',

    },
    inputstyle:{
        fontSize:18,
        fontFamily:'Roboto-Medium',
        color:'black',
    },
    checkcontainer:{
      flexDirection:'row',
      alignItems:'center',
      width:(windowwidth*90)/100,
      justifyContent:'flex-start',
      marginLeft:-5
    },
    buttonstyle:{
      width:(windowwidth*90)/100,
      height:50,
      borderRadius:10,
      backgroundColor:'#344E41',
      marginVertical:20,
      justifyContent:'center',
      alignItems:'center'
    }
})

export default Addtailor