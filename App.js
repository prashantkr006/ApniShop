import {
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#590D22" />
      <Stack.Navigator
       screenOptions={{
        title: 'Apni Shop',
        headerStyle: {backgroundColor: '#590D22'},
        headerTintColor: '#FFF0F3',
        headerTitleStyle: {fontFamily: 'RomandeADFStd-DemiBold', fontSize: 30}
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{title: 'Apni Shop'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
