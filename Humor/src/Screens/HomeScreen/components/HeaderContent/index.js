import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { TextBold, TextRegular } from '../../../../componentes/Text/index';

export default function HeaderContent(props) {

    const { date, humor } = props;
    const monthName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro")
    const data = new Date(date);
    const dia = data.getDate();
    const mes = monthName[data.getMonth()];
    const now = new Date();
    const dataDeHoje = `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`;
    const dataDaApi = `${data.getDate()} ${data.getMonth()} ${data.getFullYear()}`;
    const corETraducao = {
        happy: { cor: '#E24B4B', name: 'feliz' },
        sad: { cor: '#4B75E2', name: 'mal' },
        terrible: { cor: '#4BE263', name: 'triste' }
    }
    const hoje = () => {
        if (dataDeHoje == dataDaApi) {
            return 'Hoje'
        }
    }


    return (
        <View style={styles.headerContent}>
            <TextRegular
                style={styles.texto}
            >{hoje()} {dia} de {mes}</TextRegular>
            <Text>
                <TextBold
                    style={[styles.humorText, { color: corETraducao[humor].cor ?? 'black' }]}
                >{corETraducao[humor].name}</TextBold>
                
                <TextRegular
                    style={[styles.texto, styles.hourText]}
                > {data.getHours()}:{data.getMinutes()}</TextRegular>
            </Text>
        </View>
    );
}