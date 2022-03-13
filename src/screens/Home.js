import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Category_Card from '../components/Category_Card';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={[styles.searchBar, styles.borderShadow]} />
      </View>
      {/*body part*/}
    <View style={styles.body}>
      <View style={styles.imageCard}>
        <Category_Card imageSource={require("../assets/men's_clothing.jpg")} />
      <View style= {styles.viewCategoryText}>
        <Text style={styles.textStyle}>MEN'S CLOTHING</Text>
      </View>
      </View>

      <View style={styles.imageCard}>
        <Category_Card imageSource={require("../assets/women's_clothing.jpg")} />
      <View style= {styles.viewCategoryText}>
        <Text style={styles.textStyle}>WOMEN'S CLOTHING</Text>
      </View>
      </View>

      <View style={styles.imageCard}>
        <Category_Card imageSource={require("../assets/jwellery.jpg")} />
      <View style= {styles.viewCategoryText}>
        <Text style={styles.textStyle}>JWELLERY</Text>
      </View>
      </View>

      <View style={styles.imageCard}>
        <Category_Card imageSource={require("../assets/electronics.jpg")} />
      <View style= {styles.viewCategoryText}>
        <Text style={styles.textStyle}>ELECTRONICS</Text>
      </View>
      </View>
    </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#85182a',
    height: 200,
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#B0BEC5',
    width: '90%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  borderShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  body: {
      justifyContent: 'space-evenly',
  },
  imageCard: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  viewCategoryText: {
      position: 'absolute',
      justifyContent: 'center',
      alignContent: 'center',
  },
  textStyle: {
      fontFamily: 'RomandeADFStd-DemiBold',
      fontSize: 40,
      color: '#fff',
  }
});
