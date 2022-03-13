import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const win = Dimensions.get('window')
const ratio = win.width/700
const Category_Card = (props) => {
  return (
    <View>
    <Image style={styles.categoryCard} source={props.imageSource} />
    </View>
  )
}
export default Category_Card
const styles = StyleSheet.create({
    categoryCard: {
        width: win.width,
        height: 250 * ratio,
        opacity: 0.5,
        backgroundColor: 'rgba(0,0,0,1)'
    }
})