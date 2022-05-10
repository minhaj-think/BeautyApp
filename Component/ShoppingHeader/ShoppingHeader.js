import React from 'react'
import {View,Text,Image} from 'react-native';
import BackIcon from './../../Assets/backIcon.png';
import Bag from './../../Assets/bag.png';
const ShoppingHeader = () => {
  return (
    <View style={{width:'92%',marginHorizontal:'4%',marginTop:20,backgroundColor:'white',borderRadius:10}}>
        <View style={{display:'flex',flexDirection:'row'}}>
            <View style={{width:'13%'}}>
            <Image 
            source={BackIcon}
            style={{height:25,width:'50%',marginTop:7.5,backgroundColor:'red'}}
            />
                </View>
            <View style={{width:'70%'}}>
                <Text style={{textAlign:'center',marginTop:6,fontSize:16,fontWeight:'700',color:'black'}}>
                Shopping Bag
                </Text>
                </View>
            <View style={{width:'13%'}}>
            <Image 
            source={Bag}
            style={{height:30,marginTop:5,marginBottom:5,width:'60%'}}
            />
            <View style={{backgroundColor:'black',width:17,height:17,padding:3,position:'absolute',left:20,borderRadius:7}}>
                <Text style={{fontSize:8,color:'white',textAlign:'center',marginTop:-1}}>
                    4
                </Text>
            </View>
                </View>
        </View>
    </View>    )
}

export default ShoppingHeader