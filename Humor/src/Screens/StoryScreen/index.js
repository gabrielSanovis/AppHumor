import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import DateItem from './components/dateItem/index';
import IconContext from './components/IconContext/index';
import ButtonTabBar from '../../componentes/ButtonTabBar/index';
import { TextRegular, TextBold } from '../../componentes/Text/index';
import api from '../../services/api';
import Loading from '../../componentes/Loading';
import { emojis, corETraducao } from '../../services/mocks/general';
import BtnGoBack from '../../componentes/goBackBtn';
import Header from './components/Header';


export default function StoryScreen({ route, navigation }) {
    const { id, createdAt, mood, activities } = route.params;
    const [description, setDescription] = useState()
    const [isLoad, setIsLoading] = useState(true)

    const getDailyEntry = async () => {
        await api
            .get(`/daily_entries/${id}`)
            .then((res) => {
                setDescription(res?.data?.description);
            })
            .catch(err => console.log('deu erro ' + err))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getDailyEntry()
    }, [])

    return (
        <View style={styles.container}>
            <Loading visible={isLoad} />

            <BtnGoBack back={navigation} iconName={"chevron-left"} />

            <Header
                name={corETraducao[mood]?.name}
                cor={corETraducao[mood]?.cor}
                emoji={emojis[mood]}
                createdAt={createdAt}
            />

            <IconContext
                activity={activities}
            />

            <View style={[styles.footerWrapper, styles.elevation]}>
                <TextRegular style={styles.footerText} >{description}</TextRegular>
            </View>
        </View>
    );
}