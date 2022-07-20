import React from "react";
import { View } from 'react-native'
import IconDate from 'react-native-vector-icons/Ionicons';
import { TextRegular, TextBold } from "../../../../componentes/Text";
import styles from "./style";

export default function Header({ title, date, hour }) {
    return (
        <>
            <TextBold style={styles.headerTitle}>{title}</TextBold>

            <View style={styles.headerDateWrapper}>
                <TextRegular style={styles.headerDate}>
                    <IconDate name='calendar' size={12} color='#999' />{date}
                </TextRegular>

                <TextRegular style={styles.headerDate}>
                    <IconDate name='time-outline' size={12} color='#999' />{hour}
                </TextRegular>
            </View>
        </>
    );
}