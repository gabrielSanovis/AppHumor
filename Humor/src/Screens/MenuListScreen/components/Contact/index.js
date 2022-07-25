import React from "react";
import { View } from "react-native";
import { TextBold, TextSemiBold } from "../../../../componentes/Text";
import styles from "./style";

export default function Contact({email, gender, birthdate}) {
    return (
        <View style={styles.contactWrapper}>
            <TextBold
                style={styles.contactText}
            >
                E-MAIL: <TextSemiBold>{email}</TextSemiBold>
            </TextBold>

            <TextBold
                style={styles.contactText}
            >
                GÊNERO: <TextSemiBold>{gender}</TextSemiBold>
            </TextBold>

            <TextBold
                style={styles.contactText}
            >
                DATA DE NASCIMENTO: <TextSemiBold>{birthdate}</TextSemiBold>
            </TextBold>
        </View>
    );
}