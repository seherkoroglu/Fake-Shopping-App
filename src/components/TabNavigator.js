import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Categories from './Categories';
import Favorites from './Favorites';
const Tab = createMaterialBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      activeColor="#ffffff"
      barStyle={{ backgroundColor: '#87CEEB' }}
    >
      <Tab.Screen
        name="Products"
        component={Home}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );}


export default TabNavigator;

