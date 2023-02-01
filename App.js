import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateStory from './screens/createStory';
import FeedScreen from './screens/feed';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
export default function App() {
  
    return(
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Feed" component = {FeedScreen}/>
        <Tab.Screen name = "CreateStory" component={CreateStory}/>
      </Tab.Navigator>
     </NavigationContainer>
      
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
