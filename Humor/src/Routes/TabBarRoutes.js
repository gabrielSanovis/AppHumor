import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyIcon from '../componentes/ButtonTabBar/index';
import MenuList from '../Screens/MenuListScreen/index';
import DailyStory from '../Screens/DailyStoryScreen/index';
import Feed from '../Screens/HomeScreen/Feed/index';
import StoryScreen from '../Screens/StoryScreen/index'


const Tab = createBottomTabNavigator();

export default function Homepage() {
  const size = 20;
  return (
    <Tab.Navigator
      
      initialRouteName="Feed"
      screenOptions={{
        
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: { height: 90 },
        headerShown: false,
        tabBarInactiveTintColor: '#304FFE'
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MyIcon
              nome="home"
              tamanho={size}
              cor={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="DailyStory"
        component={DailyStory}
        options={{
          tabBarLabel: 'DailyStory',
          tabBarIcon: ({ size }) => (
            <Icon
              name="plus-circle"
              size={size * 2.6}
              color="#304FFE"
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="MenuList"
        component={MenuList}
        options={{
          tabBarLabel: 'MenuList',
          tabBarIcon: ({ color, focused }) => (
            <MyIcon
              nome="list-ul"
              tamanho={size}
              cor={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}