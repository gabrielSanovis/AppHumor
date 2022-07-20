import React from "react";
import { View } from "react-native";
import { TextSemiBold } from "../../../../../componentes/Text";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./style";
export default function Content({ name, icone, focado }) {
    return (
        <View style={styles.activityWrapper}>
            <Icon
                style={[styles.elipse, focado ? styles.activityBg : null]}
                name={icone}
                color={focado ? 'white' : 'black'}
                size={35} />

            <TextSemiBold style={styles.activityText}>{name}</TextSemiBold>

        </View>
    );
}