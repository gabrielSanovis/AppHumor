import React from "react";
import { TouchableOpacity } from "react-native";
import { TextBold } from "../../../../componentes/Text";
import styles from "./style";

export default function Buttons({ onPressProfile, onPressLogout }) {
    return (
        <>
            <TouchableOpacity
                onPress={onPressProfile}
                style={styles.btn}
            >
                <TextBold style={styles.btnText}>Editar Perfil</TextBold>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={onPressLogout}
                style={[styles.btn, styles.secondeBtn]}
            >
                <TextBold style={[styles.btnText, { color: 'black' }]}>Sair</TextBold>
            </TouchableOpacity>
        </>
    );
}