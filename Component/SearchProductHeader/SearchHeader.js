import React from 'react'
import {Image,View,Text} from 'react-native';
import BackIcon from './../../Assets/backIcon.png';
import Avatar from './../../Assets/avatar.jpg';

const SearchHeader = () => {
  return (
    <View style={{width:'92%',marginHorizontal:'4%',marginTop:20,backgroundColor:'white',borderRadius:10}}>
        <View style={{display:'flex',flexDirection:'row'}}>
            <View style={{width:'13%'}}>
            <Image 
            source={BackIcon}
            style={{height:25,width:'50%',marginTop:7.5,backgroundColor:'red',marginLeft:5}}
            />
                </View>
            <View style={{width:'70%'}}>
                <Text style={{textAlign:'center',marginTop:6,fontSize:16}}>
                Search Product
                </Text>
                </View>
            <View style={{width:'13%'}}>
            <Image 
            source={Avatar}
            style={{height:40,width:'100%',marginLeft:5}}
            />
                </View>
        </View>
    </View>
    )
}

export default SearchHeader