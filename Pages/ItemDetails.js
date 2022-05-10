import React from 'react'
import {View,Image,Text,ScrollView} from 'react-native';
import DetailsHeader from './../Component/DetailsHeader/DetailsHeader.js';
import DetailsImage from './../Component/DetailsImage/DetailsImage.js'
import DetailsSection from './../Component/DetailsSection/DetailsSection.js';
import DetailsFooter from './../Component/DetailsFooter/DetailsFooter.js';
const ItemDetails = () => {
  return (
      <ScrollView>
          <DetailsHeader/>
          <DetailsImage />
          <DetailsSection />
          <DetailsFooter/>
      </ScrollView>
  )
}

export default ItemDetails