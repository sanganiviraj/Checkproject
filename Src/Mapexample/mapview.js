import { StyleSheet, Text, View,Image,FlatList, ImageBackground } from 'react-native'
import React from 'react'
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';


const cinema = [
  {
    coordinates:{
      latitude:21.23898131093524, 
      longitude:72.8791877614445,
    },
    name:"The Friday cinema",
    image:[
      "https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png",
      "https://assets-in.bmscdn.com/moviesmaster/assets/cllp/box_office_1683026911301.jpg"
    ]
  },
  {
    coordinates:{
      latitude:21.23027664965888, 
      longitude: 72.896815836236,
      
    },
    name:"INOX raj imperial",
    image:[
      "https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png",
      "https://content.jdmagicbox.com/comp/surat/z6/0261px261.x261.170310111940.z6z6/catalogue/inox-cinemas-deepkamal-mall--sarthana-surat-cinema-halls-390phzp-250.jpg"
    ]
  },
  {
    coordinates:{
      latitude:21.23311643226095, 
      longitude: 72.8370425593903, 
      
    },
    name:"Cineverce cinema",
    image:[
      "https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png",
      "https://lh5.googleusercontent.com/p/AF1QipO2vDrqrLfP84SHBa6qJNdVqlOGidKVrNcHTxQk"
    ]
  },
  {
    coordinates:{
      latitude:21.216238505524803, 
      longitude:  72.82175461698121,
      
    },
    name:"Bajarang",
    image:[
      "https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png",
      "https://www.mappls.com/place/TBF14S_1663035218672_0.png"
    ]
  }
]


const mapview = () => {
    console.log(cinema)
  return (
    <View style={{flex:1}}>
      <MapView
        initialRegion={{
            latitude: 21.24145187618417, 
            longitude: 72.8786918323349,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        style={{flex:1}}
        >

            {/* <Marker 
                coordinate={{latitude:21.242968982649312,  longitude:72.87849692737593}}
                
                image={{uri : "https://static.vecteezy.com/system/resources/thumbnails/016/622/315/small/red-paper-tag-label-ripped-torn-cut-edges-isolated-background-png.png"}}
            /> */}


             {
              cinema.map((markers , index) =>
                {
                  console.log(markers.image[1])
                  return(
                    <Marker key={index} coordinate={markers.coordinates} >
                        <Image style={{height:30,width:30}} source={{uri : markers.image[0]}}/>
                        <Callout tooltip  >
                            <View style={{height:60,width:80,backgroundColor:'pink'}}>
                                <Image style={{height:30,width:50}} source={{uri : "https://cdn-icons-png.flaticon.com/512/5744/5744322.png" }} />
                              <Text style={{color:'black',fontSize:24}}> HI,Hello </Text>
                            </View>
                        </Callout>
                    </Marker>
                )}
              )
            } 

            {/* <FlatList 
            data={cinema}
            renderItem={({index,item}) => {
              console.log(item.coordinates)
              return(
                <Marker key={index} coordinate={item.coordinates}>
                     <Image style={{height:30,width:30}} source={{uri : item.image}}/> 
                </Marker>
              )
            }}
            /> */}

        </MapView>
    </View>
  )
}

export default mapview;

const styles = StyleSheet.create({})