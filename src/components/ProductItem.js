import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {id: item.id})}
      style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        <View style={styles.ratings}>
          {[1, 2, 3, 4, 5].map((i, index) => (
            <Icon
              key={`${item.id + index}`}
              name={
                index < Math.floor(item.avgRating)
                  ? 'star'
                  : index > Math.floor(item.avgRating)
                  ? 'star-o'
                  : 'star-half-full'
              }
              style={styles.star}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}{' '}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 150,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 3,
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  star: {
    margin: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
});

export default ProductItem;
