import React, {useState, useRef, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import Image1 from '../../assets/Images/home1.jpeg';
import Image2 from '../../assets/Images/home2.jpeg';
import Image3 from '../../assets/Images/home3.png';
import Image4 from '../../assets/Images/home5.png';
import Image5 from '../../assets/Images/home7.jpeg';
import Image6 from '../../assets/Images/home8.png';
import Image7 from '../../assets/Images/home9.jpeg';

const ImageCarousel = () => {
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

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image style={[styles.image, {width: windowWidth}]} source={item} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={windowWidth}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        keyExtractor={({item}) => item}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            style={[styles.dot, activeIndex === index ? styles.active : {}]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
