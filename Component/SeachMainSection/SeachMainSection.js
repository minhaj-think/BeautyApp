import React from 'react'
import {View,Image,Text,ScrollView} from 'react-native';
import Card from './../Card/Card.js';
import FirstImg from './../../Assets/firstShampoo.jpg';
import SecondImg from './../../Assets/secondShampoo.jpg';
import ThirdImg from './../../Assets/thirdShampoo.jpg';
import FourthImg from './../../Assets/fourthShampoo.jpg';
import FifthImg from './../../Assets/fifthShampoo.jpg';
import SixthImg from './../../Assets/sixthShampoo.jpg';

const SeachMainSection = () => {
  return (
      <ScrollView>
    <View style={{width:'92%',marginHorizontal:'4%',marginTop:20,display:'flex',flexDirection:'row',marginBottom:140}}>
        
        <View style={{width:'50%'}}>
            <Text style={{fontSize:28,fontWeight:'900',color:'black'}}>
                Found
            </Text>
            <Text style={{fontSize:28,fontWeight:'900',color:'black'}}>
                10 Results
            </Text>
            <Card Img={FirstImg} Heading={'Facial Cleanser'} desc={'Citrus refreshes senses'} price={'$9.99'} />
            <View style={{marginTop:20}}></View>
            <Card Img={SecondImg} Heading={'Micellar Cleanser'} desc={'Signature water'} price={'$10.99'} />
            <View style={{marginTop:20}}></View>
            <Card Img={ThirdImg} Heading={'Facial Cleanser'} desc={'Citrus refreshes senses'} price={'$3.99'} />
        </View>

        <View style={{width:'50%'}}>
        <Card Img={FourthImg} Heading={'Moisturiser'} desc={'Oil balancing mask'} price={'$11.99'} />
            <View style={{marginTop:20}}></View>
            <Card Img={FifthImg} Heading={'Cleansing Oil'} desc={'Super greens'} price={'$12.99'} />
            <View style={{marginTop:20}}></View>
            <Card Img={SixthImg} Heading={'Facial Cleanser'} desc={'Citrus refreshes senses'} price={'$2.99'} />

        </View>

    </View>
    </ScrollView>
    )
}

export default SeachMainSection