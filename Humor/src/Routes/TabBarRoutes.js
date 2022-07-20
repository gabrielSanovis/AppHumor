import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyIcon from '../componentes/ButtonTabBar/index';
import FeedStackScreen from './FeedRoutes';
import MenuRoutes from './MenuRoutes'
import { View } from 'react-native';

const Place = () => <View style={{flex: 1, backgroundColor: 'red'}}></View>


const Tab = createBottomTabNavigator();

export default function Homepage() {

  const size = 20;
  return (
    <Tab.Navigator
      
      initialRouteName="FeedStack"
      screenOptions={{
        
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: { height: 90 },
        headerShown: false,
        tabBarInactiveTintColor: '#304FFE'
      }}
    >
      <Tab.Screen
        name="FeedStack"
        component={FeedStackScreen}
        options={{
          tabBarLabel: 'Feed',
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
        name='Create'
        component={Place}
        options={{
          tabBarLabel: 'DailyStory',
          tabBarIcon: () => (
            <Icon
              name="plus-circle"
              size={size * 3.4}
              color="#304FFE"
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('DailyStory')
          }
        })}
        
      />
      
      <Tab.Screen
        name="MenuRoutes"
        component={MenuRoutes}
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