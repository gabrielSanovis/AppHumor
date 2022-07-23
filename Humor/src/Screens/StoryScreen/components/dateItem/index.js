import React from "react";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import { TextRegular } from "../../../../componentes/Text";



export default function DateItem(props) {

    const { date } = props;
    const monthName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro")
    const data = new Date(date);
    const dia = data.getDate();
    const mes = monthName[data.getMonth()];
    const now = new Date();
    const dataDeHoje = `${now.getDate()} ${now.getMonth()} ${now.getFullYear()}`;
    const dataDaApi = `${data.getDate()} ${data.getMonth()} ${data.getFullYear()}`;
    const hoje = () => {
        if (dataDeHoje == dataDaApi) {
            return 'Hoje'
        }
    }

    return (

        <View>
            <TextRegular
                style={[styles.headerText, { marginTop: 44 }]}
            >
                <Icon name='time-outline' size={12} color='#969696' />{data.getHours()}:{data.getMinutes()}
            </TextRegular>

            <TextRegular style={styles.headerText}
            >
                <Icon name='calendar' size={12} color='#969696' />
                {hoje()} {dia} de {mes}
            </TextRegular>
        </View>
    );
}