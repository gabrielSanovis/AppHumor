import React from "react";
import { Image } from "react-native";
import { TextRegular } from "../../../../componentes/Text";
import styles from "./style";

export default function Header({urlPhoto, name}) {
    return (
        <>
            <Image
                style={styles.imgWrapper}
                source={{ uri: `${urlPhoto}` }}
            />

            <TextRegular style={styles.welcomeText}>Olá, {name}</TextRegular>
        </>
    );
}