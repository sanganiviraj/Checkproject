import { StyleSheet, Text, View ,Image , } from 'react-native'

import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';


const Onboardingscreen = ({navigation}) => {

    

  return (
    <Onboarding
        onSkip ={() => {navigation.replace('home')}}
        onDone ={() => {navigation.replace('home')}}
        pages={[
        {
            backgroundColor: '#fff',
            image: <Image source={{ uri : "https://img.freepik.com/free-vector/flat-hand-drawn-fashion-designer-illustration_23-2148843559.jpg"}} style={{height:250,width:250,margin:20,alignSelf:'center'}}/>,
            title: 'Happy Customer',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={{uri : "https://media.istockphoto.com/id/1298327355/vector/female-at-home-sewing-clothes-flat-design-illustration-vector.jpg?s=612x612&w=0&k=20&c=XYENusKNDPSrsCevO8e18bhUQWB8tqDrcfntPgrtpEk="}} style={{height:250,width:250,margin:20,alignSelf:'center'}} />,
            title: 'All clothes measurment',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
            backgroundColor: '#fff',
            image: <Image source={{ uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPI7K0BCvQMgXr1gkUu8kYS5eyOQW87x5Zw&usqp=CAU"}} style={{height:250,width:250,margin:20,alignSelf:'center'}}/>,
            title: 'Welcome To Tailorshop',
            subtitle: 'Done with React Native Onboarding Swiper',
        },
        
        ]}
  />
  )
}

export default Onboardingscreen

const styles = StyleSheet.create({})