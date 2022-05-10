import React from 'react'
import {View,Text,Image} from 'react-native'
import HoriCard from './../HoriCard/HoriCard.js';
import FourthImg from './../../Assets/fourthShampoo.jpg';
import FifthImg from './../../Assets/fifthShampoo.jpg';
import SixthImg from './../../Assets/sixthShampoo.jpg';

const CardList = () => {
  return (
    <View  style={{width:'92%',marginHorizontal:'4%',marginTop:10}}>
        <HoriCard img={FourthImg} price={'$19.98'} desc={'Size:7.60 ft oz / 225ml'} 
        heading={'Facial Cleanser'}
        />
        <HoriCard img={FifthImg} price={'$12.99'} desc={'Size:4.23 ft oz / 125ml'} 
        heading={'Cream Cleanser'}
        />
        <HoriCard img={SixthImg} price={'$12.99'} desc={'Size:4.23 ft oz / 125ml'} 
        heading={'Cleansing Oil'}
        />
    </View>
    )
}

export default CardList