import React from 'react'
import {View,Image,Text} from 'react-native';
import BackIcon from './../../Assets/backIcon.png';
import categoryIcon from './../../Assets/categoryIcon.png';


const DetailsHeader = () => {
  return (
    <View style={{backgroundColor:'white',borderRadius:0,paddingBottom:5,padding:2}}>
        <View style={{width:'92%',marginHorizontal:'4%',display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <Image 
            source={BackIcon}
            style={{height:25,width:25,marginTop:7.5,marginLeft:10}}
            />
            <Image 
            source={categoryIcon}
            style={{height:30,width:25,marginTop:5,marginRight:10}}
            />
        </View>
    </View>
  )
}

export default DetailsHeader