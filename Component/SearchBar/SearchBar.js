import React from 'react'
import {Image,View,Text} from 'react-native';
import SearchIcon from './../../Assets/searchIcon.png';
import FilterIcon from './../../Assets/filterImg.png';
const SearchBar = () => {
  return (
    <View  style={{width:'92%',marginHorizontal:'4%',marginTop:20,borderRadius:10,paddingBottom:10}}>
        <View style={{display:'flex',flexDirection:'row'}}>
            <View style={{width:"80%"}}>
                <View style={{backgroundColor:'white',paddingVertical:5,borderRadius:10,width:'93%',display:'flex',flexDirection:'row'}}>
            <Image  
            source={SearchIcon}
            style={{height:30,width:25,marginLeft:10}}
            />
            <Text style={{fontSize:15,marginTop:4,marginLeft:10,fontWeight:'900'}}>Cleansers</Text>
            </View>
            </View>
            <View style={{width:'15%',backgroundColor:'white',borderRadius:10}}>
            <Image  
            source={FilterIcon}
            style={{height:30,width:25,marginLeft:12,marginTop:5}}
            />

            </View>
        </View>
    </View>
    )
}

export default SearchBar