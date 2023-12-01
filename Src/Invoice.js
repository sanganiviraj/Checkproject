import { StyleSheet, Text, View,Button,TouchableOpacity ,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler';
import { windowwidth } from './Constant';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Iconicons from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { SelectList } from 'react-native-dropdown-select-list'
import { Invoice_item } from './actions';

const Invoice = ({route,navigation}) => {
    const [customername,setcustomername]=useState('');
    const [customernumber,setcustomernumber]=useState('');
    const updatelist = route.params?.updateitem || '';

    const [value,setvalue]=useState(null);
    const [dropid,setdropid]=useState(null);
    const [isFocus,setisFocus]=useState(false);
    const [clothetypes,setclothetypes]= useState([]);
    const [includeitem,setincludeitem]=useState([]);
    const [defaultselected,setdefaultselected]=useState(null);

    const dispatch = useDispatch();

    const[neck,setneck]=useState('');
    const[shoulder,setshoulder]=useState('');
    const[chest,setchest]=useState('');
    const[Foreams,setForearms]=useState('');

    const[kurtachest,setkurtachest] = useState('');
    const[length,setlength]=useState('');
    const[sleeve,setsleeve]=useState('');
    const[pajama,setpajama]=useState('');

    const[knee,setknee]=useState('');
    const[cluff,setcluff]=useState('');
    const[croach,setcroach]=useState('');
    const[seat,setseat]=useState('');
    
    const[stomach,setstomach] = useState('');
    const[waistline,setwaistline]=useState('');
    const[inside,setinside]=useState('');
    const[back,setback]=useState('');

    const invoicelist = useSelector(state => state.Invoicedata);
    
    
    const Tailordetail = useSelector(state => state.Tailordata);

    let Tailorname = Tailordetail.map((item) => ({ name : item.fullname , value:item.tid }));

    const _onhandlepress = (value) => {
      const Typeindex = Tailordetail.findIndex((item) => item.tid == value );
      
      if(Typeindex!==-1){
        setclothetypes( Tailordetail[Typeindex].clothetype)
      }
      setisFocus(true);


    }
    
    const _onpressselectitem = (type) => {
      if(includeitem.includes(type)){
        setincludeitem(includeitem.filter((item) => item !== type))
      }else{
        setincludeitem([...includeitem , type])
      }
    }
   
    const _onadditems= ()  => {
      const customfit = {};
      
      if(includeitem.includes('shirt')){
        customfit['shirt'] = {
          neck : neck,
          shoulder : shoulder,
          Foreams : Foreams,
          chest : chest
        }
      }

      if(includeitem.includes('pant')){
        customfit['pant'] = {
          knee : knee,
          cluff : cluff,
          croach : croach,
          seat : seat
        }
      }

      if(includeitem.includes('kurta')){
        customfit['kurta'] = {
          kurtachest : kurtachest,
          length : length,
          pajama : pajama,
          sleeve : sleeve
        }
      }

      if(includeitem.includes('suit')){
        customfit['suit']={
          stomach : stomach,
          waistline : waistline,
          inside : inside,
          back : back
        }
      }
      dispatch(Invoice_item(customername,customernumber,customfit,value,dropid))

      navigation.goBack('home')

    }

    useEffect(() => {
      if(updatelist !== ''){
        setcustomername(updatelist.customername);
        setcustomernumber(updatelist.customernumber);
        
        console.log('tailordetail => ' ,Tailordetail);
        console.log('invoicelist => ',invoicelist);
        console.log('updatelist => ',updatelist);
        
        setdefaultselected(updatelist.value)

        const tindex = Tailordetail.findIndex((item) => item.tid == updatelist.dropid );
        
        if(tindex!==-1){
          setclothetypes( Tailordetail[tindex].clothetype)
          
        }

        const d = (Object.keys(updatelist.customfit)).toString()

        includeitem.push(d)
        

        if(includeitem.includes('pant')){
          setknee(updatelist.customfit.pant.knee)
          setcluff(updatelist.customfit.pant.cluff)
          setcroach(updatelist.customfit.pant.croach)
          setseat(updatelist.customfit.pant.seat)
        }

        if(includeitem.includes('shirt')){
          setneck(updatelist.customfit.shirt.neck)
          setshoulder(updatelist.customfit.shirt.shoulder)
          setForearms(updatelist.customfit.shirt.Foreams)
          setchest(updatelist.customfit.shirt.chest)
        }

        if(includeitem.includes('kurta')){
          setkurtachest(updatelist.customfit.pant.knee)
          setsleeve(updatelist.customfit.pant.sleeve)
          setlength(updatelist.customfit.pant.length)
          setpajama(updatelist.customfit.pant.pajama)
        }

        if(includeitem.includes('suit')){
          setstomach(updatelist.customfit.suit.stomach)
          setwaistline(updatelist.customfit.suit.waistline)
          setinside(updatelist.customfit.suit.inside)
          setback(updatelist.customfit.suit.back)
        }
         
        
        

      }

    },[])

    console.log("clothetype => ", clothetypes)
    console.log("includeitem => ", includeitem)

    

  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        <Text style={styles.titlestyle}> customername </Text>
            <View style={{width:(windowwidth*90)/100,height:50,marginTop:-5,borderBottomColor:"#2F3E46",borderBottomWidth:1,alignItems:'center',flexDirection:'row'}}>
                <Icon name="user" size={25} color='black' />

                <TextInput  
                  placeholder='Enter Customername'
                  placeholderTextColor="#52796F"
                  style={styles.inputstyle}
                  maxLength={30}
                  onChangeText={(text) => setcustomername(text)}
                  value={customername}
                />
        </View>

        <Text style={[styles.titlestyle,{marginTop:20}]}> customernumber </Text>
            <View style={{width:(windowwidth*90)/100,height:50,marginTop:-5,borderBottomColor:"#2F3E46",borderBottomWidth:1,alignItems:'center',flexDirection:'row'}}>
                <Icon2 name="doubleright" size={25} color='black' />

                <TextInput  
                  placeholder='Enter Customernumber'
                  placeholderTextColor="#52796F"
                  style={styles.inputstyle}
                  maxLength={30}
                  onChangeText={(text) => setcustomernumber(text)}
                  value={customernumber}
                />
        </View>

        
        <Dropdown 
            style={[styles.dropbox,isFocus && {borderColor:'blue',borderWidth:1}]}
            placeholderStyle={{fontSize:16,color:'black',marginLeft:10}}
            selectedTextStyle={{fontSize:16,color:'black',marginLeft:10}}
            itemTextStyle={{color:'black'}}
            data={Tailorname}
            maxHeight={300}
            labelField="name"
            valueField="value"
            value={defaultselected}
            placeholder={!isFocus ? 'select Tailor' : '...'}
            onChange={(item) => {setvalue(item.name),setdropid(item.value),setisFocus(false), _onhandlepress(item.value),setdefaultselected(item.name)}}
            onFocus={() =>setisFocus(true)}
            onBlur={() => setisFocus(false)}
        />

        <View style={{height:80}}>
        <ScrollView horizontal style={{width:(windowwidth*95)/100,alignSelf:"center"}} >
        <View style={{flexDirection:'row',justifyContent:'flex-start',height:70,}}>
        {clothetypes.map((type, index) => (
        <TouchableOpacity 
        style={{padding:10,marginTop:20,marginHorizontal:10,backgroundColor:"#588157",borderRadius:10,paddingHorizontal:20,justifyContent:'center',alignItems:'center',}}
        activeOpacity={0.7}
        onPress={() => {
          _onpressselectitem(type)
        }}
        >
          <Text style={{color:'white',fontSize:24,fontFamily:'Roboto-Medium'}}>
            {type}
          </Text>
        </TouchableOpacity> 
      ))}
      </View>
      </ScrollView>
      </View>

        
        <ScrollView showsVerticalScrollIndicator={false} style={{width:(windowwidth*95/100),alignSelf:'center'}}>



        {/* shrits */}
        { includeitem.includes('shirt') &&
          (<View style={styles.clothebox}>
            <View style={{width:160,backgroundColor:'#E6E6E6'}}>
                <Image source={require('./assets/images/shirt.png')} style={{width:150,height:200,alignSelf:'center'}} resizeMode='contain'/>
            </View> 

            <View>
            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}> Neck </Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='Size(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setneck(text)}
                    value={neck}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}> Chest </Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='chest(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setchest(text)}
                    value={chest}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 

            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>Shoulder</Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='cm'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setshoulder(text)}
                    value={shoulder}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>Forearms</Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='meter'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setForearms(text)}
                    value={Foreams}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 
            </View>

            
          </View> ) 
        }

         {/* pant */}
         {
          includeitem.includes('pant') && (<View style={[styles.clothebox]}>
            <View style={{width:160,backgroundColor:'#E6E6E6'}}>
                <Image source={require('./assets/images/pant.png')} style={{width:150,height:200,alignSelf:'center'}} resizeMode='contain'/>
            </View> 

            <View>
            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}> Knee </Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='Size(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setknee(text)}
                    value={knee}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}> cluff </Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='chest(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setcluff(text)}
                    value={cluff}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 

            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>seat</Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='cm'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setseat(text)}
                    value={seat}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>croach</Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='meter'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setcroach(text)}
                    value={croach}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 
            </View>

            
          </View>) 
         }

        {/* kurta */}
        {
          includeitem.includes('kurta') &&
          (<View style={[styles.clothebox]}>
            <View style={{width:160,backgroundColor:'#E6E6E6'}}>
                <Image source={require('./assets/images/kurto.png')} style={{width:150,height:200,alignSelf:'center'}} resizeMode='contain'/>
            </View> 

            <View>
            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}> Pajama </Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='Size(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setpajama(text)}
                    value={pajama}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}> Chest </Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='chest(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setkurtachest(text)}
                    value={kurtachest}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 

            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>sleeve</Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='cm'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setsleeve(text)}
                    value={sleeve}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>Length</Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='meter'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setlength(text)}
                    value={length}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 
            </View>

            
          </View>) 
        }

        {/* Suit */}
        {
          includeitem.includes('suit') &&
          (<View style={[styles.clothebox]}>
            <View style={{width:160,backgroundColor:'#E6E6E6'}}>
                <Image source={require('./assets/images/suit.png')} style={{width:150,height:200,alignSelf:'center'}} resizeMode='contain'/>
            </View> 

            <View>
            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>Stomach</Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='Size(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setstomach(text)}
                    value={stomach}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>wistline</Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='chest(cm)'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setwaistline(text)}
                    value={waistline}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 

            <View style={{marginLeft:10,flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>

              <View style={{marginVertical:5,alignItems:'center',marginRight:15}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>inside</Text>
                  <View style={{
                    height:40,
                    width:80,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='cm'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setinside(text)}
                    value={inside}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 

              <View style={{marginVertical:5,alignItems:'center'}}>
                  <Text style={{color:'black',fontFamily:'Roboto-Medium',fontSize:20}}>Back</Text>
                  <View style={{
                    height:40,
                    width:85,
                    borderRadius:4,
                    backgroundColor:"#E6E6E6",
                  }}> 
                    <TextInput 
                    style={{fontSize:15,color:'black'}}
                    placeholder='meter'
                    placeholderTextColor='grey'
                    onChangeText={(text) => setback(text)}
                    value={back}
                    maxLength={5}
                    keyboardType='numeric'
                    />
                  </View>

              
              </View> 
            </View> 
            </View>

            
          </View>) 
        }

       {
        includeitem.length !== 0 ? 
        <TouchableOpacity style={styles.buttonstyle} onPress={ () => {_onadditems()}}>
            <Text style={{fontSize:24,fontFamily:'Ubuntu-Bold',color:'white'}}> Submit </Text>
        </TouchableOpacity>
        : <></>
       }
        </ScrollView>

        

      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#F9F8F6'
    },
    buttonstyle:{
      width:(windowwidth*90)/100,
      height:50,
      borderRadius:10,
      backgroundColor:'#344E41',
      marginVertical:20,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },
    box:{
        flex:1,marginVertical:10,marginHorizontal:20
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
    dropbox:{
        width:(windowwidth*80)/100,
        height:50,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:'grey',
        alignSelf:'center',
        marginTop:30,
        backgroundColor:"white",
        elevation:2
    },
    clothebox:{
      flexDirection:'row',
      backgroundColor:'white',
      elevation:10,
      borderRadius:10,
      height:200,
      width:(windowwidth*90)/100,
      marginTop:10,
      alignSelf:'center',
      marginVertical:10
      
    }
})

export default Invoice