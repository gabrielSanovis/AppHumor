import React from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import DATA from '../../../DATAFlatList/DATA'
import HomeEmpty from '../index'
import FlatListComponent from '../components/FlatListComponent';

export default function Feed({ navigation }) {
    const renderItem = ({ item }) => (
        <FlatListComponent
            onPress={() => {
                navigation.navigate("StoryScreen", item)
            }}
            image={item.image}
            now={item.now}
            date={item.date}
            humor={item.humor}
            icon={item.icon}
            activity={item.activity}
            about={item.about}
            
        />
    );

    return (
        <SafeAreaView>
            <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={HomeEmpty}
            />
        </SafeAreaView>
    );
}