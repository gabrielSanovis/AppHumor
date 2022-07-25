import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { TextBold, TextRegular } from '../../../../componentes/Text/index';
import { corETraducao, dateFormat } from '../../../../services/mocks/general';

export default function HeaderContent({date, humor}) {

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
        <View style={styles.headerContent}>
            <TextRegular
                style={styles.texto}
            >{isTodayOrNo()} {createdAt.day} de {createdAt.month}</TextRegular>
            <Text>
                <TextBold
                    style={[styles.humorText, { color: corETraducao[humor].cor}]}
                >{corETraducao[humor].name}</TextBold>
                
                <TextRegular
                    style={[styles.texto, styles.hourText]}
                > {createdAt.hora}:{createdAt.minutes}</TextRegular>
            </Text>
        </View>
    );
}