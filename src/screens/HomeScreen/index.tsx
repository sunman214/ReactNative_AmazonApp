/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';
import ProductItem from '../../components/productItem';
import products from '../../data/products';

const HomeScreen = ({searchValue}:{searchValue:string}) => {
  console.warn(searchValue)
  return (
      <View style={styles.page}>
        <FlatList
        data={products}
        renderItem={({item})=><ProductItem item={item}/>}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
      </View>
  );
};

const styles = StyleSheet.create({
 page:{padding:10},
});
export default HomeScreen;
