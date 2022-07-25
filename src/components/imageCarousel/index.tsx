import React, {useCallback, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  const onFlatListUpdate = useCallback(({viewableItems}) => {
    if  (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    ;}
    console.log(viewableItems);
  }, []);
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {},
  image: {height: 250, resizeMode: 'contain', margin: 10},
  dots: {flexDirection: 'row', justifyContent: 'center'},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#c9c9c9',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
export default ImageCarousel;
