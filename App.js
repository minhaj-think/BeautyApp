
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
import Animation from './Pages/Animation.js';
import ItemDetails from './Pages/ItemDetails.js';
import { NativeBaseProvider,  Box } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    
    <NativeBaseProvider>
    <View style={styles.mainStyle}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
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
