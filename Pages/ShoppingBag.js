import React from 'react'
import {View,Text,ScrollView,Image,Button} from 'react-native';
import SearchBar from '../Component/SearchBar/SearchBar';
import SearchHeader from '../Component/SearchProductHeader/SearchHeader';
import SeachMainSection from '../Component/SeachMainSection/SeachMainSection.js';
import ShoppingHeader from '../Component/ShoppingHeader/ShoppingHeader.js';
import CardList from './../Component/CardList/CardList.js';
import PromoCode from './../Component/PromoCode/PromoCode.js';
import TotalSection from './../Component/TotalSection/TotalSection.js';

const ShoppingBag = () => {
  return (
<ScrollView>
<ShoppingHeader />
<CardList/>
<PromoCode />
<TotalSection />
</ScrollView>
    )
}

export default ShoppingBag