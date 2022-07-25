import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../quantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.image}`,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((_e, i) => (
              <FontAwesome
                key={`${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from {item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  row:{flexDirection:'row'},
  page: {padding: 10},
  image: {flex: 2, height: 150, resizeMode: 'contain'},
  rightContainer: {padding: 10, flex: 3},
  starContainer: {flexDirection: 'row', alignItems: 'center'},
  star: {marginVertical: 5},
  title: {fontSize: 18},
  price: {fontSize: 18, fontWeight: 'bold'},
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer:{marginVertical:10,marginLeft:30}
});
export default CartProductItem;
