import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/quantitySelector';
import Button from '../../components/button';
import ImageCarousel from '../../components/imageCarousel';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [quantity, setQuantity] = useState(1);
  const Route = useRoute().params;
  console.warn(Route);
  return (
    <ScrollView style={styles.root}>
      {/* Image carousel */}
      <ImageCarousel images={product.images}/>
      {/* Option Selector */}
      {/* Price */}
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>
        from {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        )}
      </Text>
      {/* Color options */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('add to cart');
        }}
        containerStyles={{backgroundColor:'#e3c985'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy Now');
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {padding:10, backgroundColor:'white',},
  title: {fontSize: 18},
  price: {fontSize: 18, fontWeight: 'bold'},
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {marginVertical:10,lineHeight:20},
});
export default ProductScreen;
