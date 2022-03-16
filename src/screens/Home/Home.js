import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import ProductList from './ProductList'
import Category from './Category'
import Slider from './Slider'

const Header =() => {
  return (
    <View style={styles.Header}>
    <TouchableOpacity>
    <Icon name='menu' size={30} color="#000"
    style={{marginLeft: 10}} />
    </TouchableOpacity>
    <Text style={{fontSize: 20, fontWeight: '700'}}>Apni Shop</Text>
    <TouchableOpacity>
    <Icon name='search' size={30} color="#000" 
    style={{marginRight: 10}}/>
    </TouchableOpacity>
    </View>
  )
}

const Home = () => {
  return (
    <View>
      <Header />
      <Category />
      <Slider />
      <ProductList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#E2EAFC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
  }
})