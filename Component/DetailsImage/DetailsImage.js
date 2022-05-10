import React from 'react'
import {View,Text,Image} from 'react-native'
import SelectedImg from './../../Assets/fourthShampoo.jpg';

const DetailsImage = () => {
  return (
    <View>
        <Image 
        source={SelectedImg}
        style={{width:'100%',height:300}}
        />
    </View>
    )
}

export default DetailsImage