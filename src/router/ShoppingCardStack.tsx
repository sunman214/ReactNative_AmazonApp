import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Stack = createNativeStackNavigator();

function ShoppingCardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={ShoppingCartScreen}
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        name="address"
        component={AddressScreen}
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
}
export default ShoppingCardStack;
