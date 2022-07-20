import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuListScreen from '../Screens/MenuListScreen/index'
import EditProfileScreen from '../Screens/EditProfileScreen/index'

const FeedStack = createNativeStackNavigator();

export default function FeedStackScreen() {
    return (
        <FeedStack.Navigator
        screenOptions={{
            headerShown: false,
          }}
        >
            <FeedStack.Screen name="MenuList" component={MenuListScreen} />
            <FeedStack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        </FeedStack.Navigator>
    );
}