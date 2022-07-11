import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import DateItem from '../../componentes/StoryFeed/dateItem/index';
import IconContext from '../../componentes/StoryFeed/IconContext/index';
import ButtonTabBar from '../../componentes/ButtonTabBar/index';

export default function StoryScreen({ route, navigation }) {

    const { image, now, date, humor, about } = route.params;
    const { icon, activity } = route.params;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
                style={styles.goBack}
            >

                <ButtonTabBar
                    nome="chevron-left"
                    tamanho={20}
                    cor={'#304FFE'}
                    sizeBackground={36}

                />
            </TouchableOpacity>


            <View style={styles.headerWrapper}>
                <DateItem
                    now={now}
                    data={date}
                />
                <Image
                    source={image}
                    style={styles.imgWrapper}
                />
                <Text style={
                    [styles.humorText,
                    humor === 'mal'
                        ? { color: '#4B75E2' } : null,

                    humor === 'triste'
                        ? { color: '#4BE263' } : null]}>{humor}</Text>
            </View>
            <IconContext
                name={icon}
                activity={activity}
            />
            <View style={styles.footerWrapper}>
                <Text style={styles.footerText}>{about}</Text>
            </View>
        </View>
    );
}