import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TextBold, TextRegular } from "../../../../componentes/Text";
import styles from "./style";

export default function PopUp({inputInvalid}) {
    return (
        <View style={styles.containerSecond}>
            <View style={styles.background}>

                <View>

                    <TextBold style={[styles.mainText, styles.headerText]}>Atenção</TextBold>
                    <TextRegular style={styles.aboutHeaderText}>Selecione uma foto!</TextRegular>
                </View>

                <View style={styles.footer}>

                    <TouchableOpacity
                        onPress={inputInvalid}
                    >

                        <TextBold style={[styles.mainText, styles.footerText]}>ok</TextBold>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}