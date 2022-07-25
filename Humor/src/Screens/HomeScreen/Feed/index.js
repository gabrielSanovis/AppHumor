import React, { useEffect, useState, use } from 'react';
import { SafeAreaView, FlatList, StatusBar, TouchableOpacity, Text, View } from 'react-native';
import HomeEmpty from '../index'
import FlatListComponent from '../components/FlatListComponent';
import api from '../../../services/api';
import Loading from '../../../componentes/Loading';

export default function Feed({ navigation }) {
    const [isLoad, setIsLoad] = useState(true);

    const [moods, setMoods] = useState()
    const getDailyEntries = async () => {
        await api
            .get("/daily_entries")
            .then((res) => {
                setMoods(res.data);
            })
            .catch(err => console.log('deu erro ' + err))
            .finally(() => setIsLoad(false))
    }

    useEffect(() => {
        getDailyEntries();
    }, [])

    const renderItem = ({ item }) => (
        <FlatListComponent

            onPress={() => {
                navigation.navigate("StoryScreen", { 
                    id: item.id,
                    createdAt: item.created_at,
                    mood: item.mood,
                    activities: item.activities
                })
            }}
            date={item.created_at}
            humor={item.mood}
            activity={item.activities}
            about={item.short_description}

        />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor='white' />
            <FlatList
                style={{ flex: 1 }}
                data={moods}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={HomeEmpty}
                ListHeaderComponent={<Loading visible={isLoad} />}
            />
        </SafeAreaView>
    );
}