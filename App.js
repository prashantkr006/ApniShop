import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Home from './src/screens/Home/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor='#E2EAFC' barStyle='dark-content' />
    <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
})