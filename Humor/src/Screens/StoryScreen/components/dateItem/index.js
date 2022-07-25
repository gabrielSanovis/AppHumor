import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import { TextRegular } from "../../../../componentes/Text";
import { dateFormat } from "../../../../services/mocks/general";



export default function DateItem({date}) {

    const createdAt = dateFormat(date)
    const ActuallyDate = new Date();
    const comparingMonths = createdAt.monthIndex === ActuallyDate.getMonth();
    const comparingYears = createdAt.year ===  ActuallyDate.getFullYear();

    const isTodayOrNo = () => {
        if (createdAt.day === ActuallyDate.getDate() && comparingMonths && comparingYears) {
            return 'Hoje';
        }else if(createdAt.day === ActuallyDate.getDate() - 1 && comparingMonths && comparingYears) {
            return 'Ontem';
        }
    }

    return (

        <View>
            <TextRegular
                style={[styles.headerText, { marginTop: 44 }]}
            >
                <Icon name='time-outline' size={12} color='#969696' />{createdAt.hora}:{createdAt.minutes}
            </TextRegular>

            <TextRegular style={styles.headerText}
            >
                <Icon name='calendar' size={12} color='#969696' />
                {isTodayOrNo()} {createdAt.day} de {createdAt.month}
            </TextRegular>
        </View>
    );
}