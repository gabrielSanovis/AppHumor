import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./style";



export default function DateItem(props) {
    //now: se for postado hoje ele vem com o valor de true
    const { now, data } = props;
    //data: recebe a data que foi postado

    function hoje(now) {
        return now ? ` Hoje, ${data}` : ` ${data}`
    }

    return (
        <View>
            <Text
                style={[styles.headerText, { marginTop: 44 }]}
            >
                <Icon name='time-outline' size={12} color='#969696' />8:35
            </Text>

            <Text style={styles.headerText}
            >
                <Icon name='calendar' size={12} color='#969696' />
                {hoje(now)}
            </Text>
        </View>
    );
}