import React from "react";
import { View, Image } from "react-native";
import { TextBold } from "../../../../componentes/Text";
import DateItem from "../dateItem";
import styles from "./style";

export default function Header({name, cor, emoji, createdAt}) {
    return (
        <View style={styles.headerWrapper}>

            <DateItem
                date={createdAt}
            />

            <Image
                source={emoji}
                style={styles.imgWrapper}
            />

            <TextBold style={[styles.humorText, { color: cor }]}>
                {name}
            </TextBold>
        </View>
    );
}