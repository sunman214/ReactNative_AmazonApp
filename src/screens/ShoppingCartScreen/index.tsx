/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet,FlatList,Text } from 'react-native';
import Button from '../../components/button';
import CartProductItem from '../../components/cardProductItem';
import carts from '../../data/cart';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartScreen = () => {
  const toltalPrices = carts.reduce((summmedPrice, cart) =>(
    summmedPrice + cart.item.price * cart.quantity
  ),0)
  const navigation = useNavigation();
  const onCheckout = () => {navigation.navigate('address')}
  return (
      <View style={styles.page}>
        <FlatList
        data={carts}
        renderItem={({item})=>(
        <CartProductItem cartItem={item}/>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=>(
          <View>
            <Text>Subtotal ({carts.length} items):
              <Text style={{color:'#e47911',fontWeight:'bold'}}>$ {toltalPrices.toFixed(2)}</Text>
            </Text>
            <Button text="Proceed to checkout" onPress={onCheckout}
              containerStyles={{backgroundColor:'#f7e300',borderColor:'#c7b702',height:40}}
            /> 
        </View>
        )}
      />
      </View>
  )
}

const styles = StyleSheet.create({
 page:{padding:10},
});
export default ShoppingCartScreen;