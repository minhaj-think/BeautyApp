import React from 'react'
import {View,Text,Image,TextInput} from 'react-native'
const PromoCode = () => {
  return (
    <View style={{width:'80%',marginHorizontal:'10%',marginTop:20}}>
        <View style={{width:"100%",height:60,backgroundColor:'white',borderRadius:10,display:'flex',flexDirection:'row'}}>
            <TextInput placeholder='Promo Code' style={{marginTop:5,marginLeft:10,width:'65%'}} />
            <View style={{width:'25%',backgroundColor:'black',height:40,marginTop:10,borderRadius:10}}>
        <Text style={{textAlign:'center',color:'white',paddingTop:7}}>Apply</Text>
            </View>
        </View>
    </View>
    )
}

export default PromoCode