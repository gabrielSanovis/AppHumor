import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaLogin from './src/Screens/TelaLogin/index';
import Home from './src/componentes/Routes/index';
import StoryScreen from './src/Screens/StoryScreen';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Homepage" component={Home} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};


export default App;
