import React, {useState, useRef, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';

const ImageCarousel = ({images}) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    if (changed && changed.length > 0) {
      setActiveIndex(changed[0].index);
    }
  });

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth}]}
            source={{uri: item.uri}}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={windowWidth}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            style={[styles.dot, activeIndex === index ? styles.active : {}]}
            key={image.id}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    backgroundColor: '#F0F0F0',
    margin: 4,
  },
  active: {
    backgroundColor: '#c9c9c9',
  },
});

export default ImageCarousel;
