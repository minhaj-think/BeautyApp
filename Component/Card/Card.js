import React from 'react'
import {Text,Image,View,ScrollView} from 'react-native'
import HeatIcon from './../../Assets/heartIcon.png' 

const Card = ({Img,Heading,desc,price}) => {
  return (
<View style={{height:300,width:'94%',backgroundColor:'white',borderRadius:14}}>
<Image 
source={Img}
style={{height:220,width:'90%',marginLeft:'5%'}}
/>
<Text style={{fontSize:14,fontWeight:'900',marginLeft:10}}>
    {Heading}
</Text>
<Text style={{fontSize:11,fontWeight:'200',marginLeft:10}}>
    {desc}
</Text>
<View style={{marginTop:5,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:18,color:'black',fontWeight:'800',marginLeft:10}}>{price}</Text>
<Image
source={HeatIcon}
style={{height:28,width:28,borderRadius:50,marginRight:10}}
/>
</View>
</View>
    )
}

export default Card