import React from 'react'
import {View,Text} from 'react-native'
const TotalSection = () => {

    var arr=[{title:'Subtotal',price:'$45.99',items:false},{title:'Shipping',price:'$4.99',items:false},
    {title:'Bag Total',price:'$50.98',items:true}]

    return (
    <View style={{width:'88%',marginHorizontal:'6%',marginTop:10,borderRadius:10}}>
{
    arr.map((v,i)=>{
        return(
            <View key={i} style={{marginTop:10}}>
            <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:14,fontWeight:'700',color:'black'}}>{v.title}</Text>
                <View style={{display:'flex',flexDirection:'row'}}>
                {
                    v.items &&
                <Text style={{color:'black',fontSize:10,marginTop:3,marginRight:10}}>(4 items)</Text>
                }
                
                <Text style={{fontSize:15,fontWeight:'700',color:'black'}}>{v.price}</Text>
                <Text style={{fontSize:12,marginTop:2,marginLeft:3}}>USD</Text>
                </View>
            </View>
            <View style={{backgroundColor:'white',height:3,width:'100%',marginTop:10}}>
            </View>
                
            </View>
        )
    })
}
<View style={{backgroundColor:'black',width:'100%',height:60,borderRadius:30,marginTop:40,marginBottom:10}}>
<Text style={{textAlign:'center',color:'white',fontWeight:'600',fontSize:16,marginTop:15}}>Proceed To Checkout</Text>
</View>

    </View>
    )
}

export default TotalSection