/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './src/components/TabNavigator';
import FavoritesContextProvider from './src/components/context/favoritesContext';



const App = () => {
  return (
   <NavigationContainer>
      <FavoritesContextProvider>
      <TabNavigator />
      </FavoritesContextProvider>
    </NavigationContainer>
  );
};





 


export default App;
