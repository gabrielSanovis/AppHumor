import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { TextBold } from "../../../../componentes/Text";
import styles from "./style";

export default function Footer({ onPress }) {
    return (
        <>
            <View style={styles.inputArea}>
                <TextInput
                    multiline={true}
                    style={styles.input}
                    placeholder='Escreva aqui o que aconteceu hoje...'
                    placeholderTextColor='#969696'
                />
            </View>

            <TouchableOpacity
                onPress={onPress}
                style={styles.btnSalvar}
            >
                <TextBold style={styles.btnText}>Salvar</TextBold>
            </TouchableOpacity>
        </>
    );
}
