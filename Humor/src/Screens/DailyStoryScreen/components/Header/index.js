import React from "react";
import { View } from 'react-native'
import IconDate from 'react-native-vector-icons/Ionicons';
import { TextRegular, TextBold } from "../../../../componentes/Text";
import styles from "./style";
import { dateFormat } from "../../../../services/mocks/general";

export default function Header({ title }) {
    const now = dateFormat(Date())
    return (
        <>
            <TextBold style={styles.headerTitle}>{title}</TextBold>

            <View style={styles.headerDateWrapper}>
                <TextRegular style={styles.headerDate}>
                    <IconDate name='calendar' size={12} color='#999' />{`Hoje ${now.day} de ${now.month}`}
                </TextRegular>

                <TextRegular style={styles.headerDate}>
                    <IconDate name='time-outline' size={12} color='#999' />{`${now.hora}:${now.minutes}`}
                </TextRegular>
            </View>
        </>
    );
}