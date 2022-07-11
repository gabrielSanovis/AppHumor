import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import  HeaderContent  from '../../../componentes/Story/HeaderContent/index';
import Story from '../../../componentes/Story/index';
import DATA from '../../../DATAFlatList/DATA'
import HomeEmpty from '../index'

const Item = ({ now, image, date, humor, icon, activity, about, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.contentWrapper}>
        <View style={styles.headerWrapper}>
            <Image
                source={image}
                style={styles.imgWrapper}
            />

            <HeaderContent
                now={now}
                date={date}
                humor={humor}
            />
        </View>
        <Story
            iconName={icon}
            activity={activity}
        />
        <Text style={styles.footerText}>{about}</Text>
    </TouchableOpacity>
);

export default function Feed({ navigation }) {
    const renderItem = ({ item }) => (
        <Item
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
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={HomeEmpty}
            />
        </SafeAreaView>
    );
}