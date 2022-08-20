import React from "react";
import { TouchableOpacity } from "react-native";
import ButtonTabBar from '../ButtonTabBar/index';
import styles from "./style";


export default function BtnGoBack({ iconName, iconColor, iconSize, sizeBackground, back }) {

    return (
        <TouchableOpacity
            style={styles.goBack}
            onPress={() => {
                back.goBack();
            }}
        >

            <ButtonTabBar
                nome={iconName || 'remove'}
                tamanho={iconSize || 20}
                cor={iconColor || '#304FFE'}
                sizeBackground={sizeBackground || 36}

            />
        </TouchableOpacity>
    );
}