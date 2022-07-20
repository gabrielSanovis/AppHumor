import React from "react";
import { View, Image } from "react-native";
import { TextBold } from "../../../../../componentes/Text";
import styles from "./style";

export default function Content({ emoji, name, focado }) {
    return (
        <View style={styles.moodWrapper}>
            <View style={[styles.moodPress,
            focado
                ? styles.activityBg
                : null
            ]}>

                <Image
                    style={styles.imageMoodWrapper}
                    source={emoji}
                />
            </View>
            <TextBold style={[styles.moodText,
            focado
                ? { color: '#C801FA' }
                : {color: '#969696'}
            ]}>
                {name}
            </TextBold>
        </View>
    );
}