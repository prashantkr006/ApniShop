import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Category = () => {
  return (
    <View style={styles.category}>
      <View style={styles.imgCover}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/men's_clothing.jpg")}
        />
      </View>
      <View style={styles.imgCover}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/women's_clothing.jpg")}
        />
      </View>
      <View style={styles.imgCover}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/jwellery.jpg')}
        />
      </View>
      <View style={styles.imgCover}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/electronics.jpg')}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CFD8DC',
  },
  imageStyle: {
    height: 60,
    borderRadius: 30,
    width: 60,
    opacity: 0.8,
  },
  imgCover: {
    borderRadius: 30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
});
