import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import DateItem from './components/dateItem/index';
import IconContext from './components/IconContext/index';
import ButtonTabBar from '../../componentes/ButtonTabBar/index';
import { TextRegular, TextBold } from '../../componentes/Text/index'

export default function StoryScreen({ route, navigation }) {

    const { image, now, date, humor, about } = route.params;
    const { icon, activity } = route.params;

    const cores = {
        bem: '#E24B4B',
        mal: '#4B75E2',
        triste: '#4BE263'
    }

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

                <TextBold style={[styles.humorText, { color: cores[humor] }]}>
                    {humor}
                </TextBold>
            </View>

            <IconContext
                name={icon}
                activity={activity}
            />

            <View style={[styles.footerWrapper, styles.elevation]}>

                <TextRegular style={styles.footerText} >{about}</TextRegular>
            </View>
        </View>
    );
}