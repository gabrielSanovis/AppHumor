import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import DateItem from './components/dateItem/index';
import IconContext from './components/IconContext/index';
import ButtonTabBar from '../../componentes/ButtonTabBar/index';
import { TextRegular, TextBold } from '../../componentes/Text/index';
import api from '../../services/api';



export default function StoryScreen({ route, navigation }) {
    const { id } = route.params;
    const [ createdAt, setCreatedAt ] = useState()
    const [ description, setDescription ] = useState()
    const [ mood, setMood ] = useState()
    const [ activities, setActivities ] = useState()
    const [ loading, setLoading ] = useState(false)
    
    const getDailyEntry = async () => {
        await api
            .get(`/daily_entries/${id}`)
            .then((res) => {
                setCreatedAt(res?.data?.created_at);
                setDescription(res?.data?.description);
                setActivities(res?.data?.activities);
                setMood(res?.data?.mood)
                setLoading(true);
            })
            .catch(err => console.log('deu erro ' + err))
    }

    useEffect(() => {
        getDailyEntry()
    }, [loading])

    const emojis = {
        happy: require('../../../assets/humores/happy.png'),
        sad: require('../../../assets/humores/sad.png'),
        terrible: require('../../../assets/humores/terrible.png')
    }

    const corETraducao = {
        happy: { cor: '#E24B4B', name: 'feliz' },
        sad: { cor: '#4B75E2', name: 'mal' },
        terrible: { cor: '#4BE263', name: 'triste' }
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
                    date={createdAt}
                />

                <Image
                    source={emojis[mood]}
                    style={styles.imgWrapper}
                />

                <TextBold style={[styles.humorText, { color: corETraducao[mood]?.cor }]}>
                    {corETraducao[mood]?.name}
                </TextBold>
            </View>

            <IconContext
                activity={activities}
            />

            <View style={[styles.footerWrapper, styles.elevation]}>
                
                <TextRegular style={styles.footerText} >{description}</TextRegular>
            </View>
        </View>
    );
}