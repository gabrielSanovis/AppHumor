import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function HeaderContent(props) {

    const { now, date, humor } = props;

    const hoje = () => {
        if (now) {
            return <Text style={styles.texto}>Hoje, {date}</Text>
        } else {
            return <Text style={styles.texto}>{date}</Text>
        }
    }


    const colorHumor = humor => {
        if (humor === 'bem') {
            return <Text style={[styles.texto, styles.humorText, { color: '#E24B4B' }]}>{humor} </Text>
        } else if (humor === 'mal') {
            return <Text style={[styles.texto, styles.humorText, { color: '#4B75E2' }]}>{humor} </Text>
        } else if (humor === 'triste') {
            return <Text style={[styles.texto, styles.humorText, { color: '#4BE263' }]}>{humor} </Text>
        }
    }

    return (
        <View style={styles.headerContent}>
            {hoje()}
            <Text>
                {colorHumor(humor)}
                <Text style={[styles.texto, styles.hourText]}>08:35</Text>
            </Text>
        </View>
    );
}