import React from 'react'
import {View,Text,Image} from 'react-native';

const HoriCard = ({img,price,desc,heading}) => {
  return (
    <View style={{display:'flex',flexDirection:'row',width:'100%',marginTop:10}}>
        <View style={{width:'20%'}}>
            <Image 
            source={img}
            style={{width:'100%',height:65,borderRadius:10}}
            />
        </View>
        <View style={{width:'50%',paddingLeft:20}}>
            <Text style={{fontSize:16,fontWeight:'900',color:'black'}}>{heading}</Text>
            <Text style={{fontSize:8}}>{desc}</Text>
            <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>{price}</Text>
        </View>
        <View style={{width:'30%'}}>
        <Text style={{textAlign:'right',fontSize:14,color:'gray',marginRight:20,fontWeight:'700'}}>x</Text>
        <View style={{display:'flex',flexDirection:'row',marginTop:19,justifyContent:'flex-end',marginRight:20}}>
            <View style={{width:23,marginRight:5,height:23,borderColor:'black',borderWidth:1,borderRadius:50}}>
                <Text style={{textAlign:'center',color:'black',fontSize:20,marginTop:-6,fontWeight:'800'}}>-</Text>
            </View>
            <View>
            <Text style={{fontWeight:'800',color:'black'}}>02</Text>
            </View>
            <View style={{marginLeft:5,width:23,height:23,borderColor:'black',backgroundColor:'black',borderWidth:1,borderRadius:50,shadowColor:'red'}}>
                <Text style={{textAlign:'center',color:'white',fontSize:15,marginTop:-1,fontWeight:'800'}}>+</Text>
            </View>
        </View>
        </View>
    </View>
    )
}

export default HoriCard