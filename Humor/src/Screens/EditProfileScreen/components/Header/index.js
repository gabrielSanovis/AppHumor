import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { TextBold } from "../../../../componentes/Text";
import styles from "./style";
import api from "../../../../services/api";

export default function Header({photoUrl, visible}) {
    return (
        <>
            <Image
                style={styles.imgWrapper}
                source={{ uri: `${api.defaults.baseURL}${photoUrl}`}}
            />


            <TouchableOpacity
                onPress={visible}
                style={styles.photoBtn}
            >
                <TextBold style={styles.photoBtnText}>Alterar Foto</TextBold>
            </TouchableOpacity>
        </>
    );
}