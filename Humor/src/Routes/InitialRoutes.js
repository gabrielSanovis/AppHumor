import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen/index';
import Home from './TabBarRoutes';
import DailyStory from '../Screens/DailyStoryScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Homepage" component={Home} />
      <Stack.Screen name="DailyStory" component={DailyStory} />
    </Stack.Navigator>
  );
}
