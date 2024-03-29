import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native';
import Vegon from './../../Assets/vegan.png';
import Natural from './../../Assets/natural2.jpg';
import Cplus from './../../Assets/natural.png';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const DetailsSection = () => {

     
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
    <>
    <View style={{width:'92%',marginHorizontal:'4%',display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
        <View style={styles.box}>
            <Image 
            source={Vegon}
            style={styles.img}
            />
            <Text style={styles.text}>
                Vegon
            </Text>
        </View>
        <View style={styles.box}>
        <Image 
            source={Natural}
            style={styles.img}
            />
            <Text style={styles.text}>
                Natural
            </Text>

        </View>
        <View style={styles.box}>
        <Image 
            source={Cplus}
            style={styles.img}
            />
            <Text style={styles.text}>
                c+ Neutral
            </Text>

        </View>
    </View>
    <GestureRecognizer
        onSwipe={(direction, state) =>console.log(direction)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: 'red'
        }}
        >
        <Text>asd</Text>
        <Text>onSwipe callback received gesture: Kill</Text>
      </GestureRecognizer>
</>
    )
}

export default DetailsSection

const styles= StyleSheet.create({
    box:{
        height:90,width:90,backgroundColor:'white',borderRadius:20
    },
    text:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:11,
        marginTop:4
    },
    img:{height:'70%',marginHorizontal:'15%',width:'70%',borderRadius:20,marginTop:4}
})