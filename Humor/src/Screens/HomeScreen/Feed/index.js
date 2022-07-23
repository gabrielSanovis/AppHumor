import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StatusBar, TouchableOpacity, Text, View } from 'react-native';
import DATA from '../../../DATAFlatList/DATA'
import HomeEmpty from '../index'
import FlatListComponent from '../components/FlatListComponent';
import api from '../../../services/api';

export default function Feed({ navigation }) {
    const [ isFecth, setIsFetch] = useState(true);

    const [user, setUser] = useState()
    const getDailyEntries = async () => {
        await api
            .get("/daily_entries")
            .then((res) => {
                setUser(res.data);

            })
            .catch(err => console.log('deu erro ' + err))
            .finally(() => setIsFetch(false))
    }



    useEffect(() => {
        getDailyEntries();
    }, [])

    const renderItem = ({ item }) => (
        <FlatListComponent
        
            onPress={() => {
                navigation.navigate("StoryScreen", { id: item.id })
            }}
            image={item.image}
            now={item.now}
            date={item.created_at}
            humor={item.mood}
            activity={item.activities}
            about={item.short_description}

        />
    );

    return (
        <SafeAreaView  style={{flex:1}}>
            <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
            <FlatList
                style={{flex:1}}
                data={user}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={HomeEmpty}
                ListHeaderComponent={<View style={{flex:1, backgroundColor: 'red', display: isFecth ? 'flex' : 'none'}}><Text>CARREGANDO</Text></View>}
            />
        </SafeAreaView>
    );
}