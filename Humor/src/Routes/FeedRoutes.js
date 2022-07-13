import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feed from '../Screens/HomeScreen/Feed/index';
import StoryScreen from '../Screens/StoryScreen/index'

const FeedStack = createNativeStackNavigator();

export default function FeedStackScreen() {
    return (
        <FeedStack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <FeedStack.Screen name="Feed" component={Feed} />
            <FeedStack.Screen name="StoryScreen" component={StoryScreen} />
        </FeedStack.Navigator>
    );
}