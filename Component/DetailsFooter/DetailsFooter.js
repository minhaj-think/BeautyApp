import React from 'react'
import {View,Text,Image} from 'react-native';
import rating from './../../Assets/rating.jpg';

const DetailsFooter = () => {
  return (
    <View style={{width:'100%',borderTopLeftRadius:20,marginTop:20,backgroundColor:'white',borderTopRightRadius:20,paddingBottom:20}}>
        <View style={{width:'86%',marginHorizontal:'7%',marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize:18,color:'black',fontWeight:'700'}}>Facial Cleanser</Text>
                <Text  style={{fontSize:10}}>Size: 7.60 ft oz / 225ml</Text>
            </View>
            <View>
                <Image 
                source={rating}
                style={{height:30,width:80}}
                />
                <Text  style={{fontSize:10,textAlign:'right'}}>(123 Reviews)</Text>
            </View>
        </View>

        <View style={{width:'86%',marginHorizontal:'7%',marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'40%'}}>
                <Text style={{fontSize:24,color:'black',fontWeight:'700'}}>$9.99</Text>

            </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'60%'}}>
                    <View style={{display:'flex',flexDirection:'row',paddingVertical:2,height:28,marginTop:5,paddingHorizontal:15,borderColor:'black',borderWidth:1,borderRadius:15}}>
                        <Text style={{marginRight:20}}>-</Text>
                        <Text>1</Text>
                        <Text style={{marginLeft:20}}>+</Text>
                    </View>
                    <View style={{height:40,width:70,marginLeft:10,backgroundColor:'black',borderRadius:10}}>
                        <Text style={{textAlign:'center',color:'white',marginTop:8}}>Cart</Text>
                    </View>
                </View>
        <View>
            </View>
 
        </View>
    </View>
    )
}

export default DetailsFooter