
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ShoppingBag from './Pages/ShoppingBag';
import SearchProduct from './Pages/SearchProduct.js';
import ItemDetails from './Pages/ItemDetails.js';
import { NativeBaseProvider,  Box } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = () => {


  return (
    
    <NativeBaseProvider>
    <View style={styles.mainStyle}>
      <ShoppingBag/>
    </View>
    
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  mainStyle:{
    display:'flex',
    backgroundColor:'#EBEAEF',
    height:'100%',
    width:'100%'
  }
});

export default App;
