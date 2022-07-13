import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { TextSemiBold } from '../../Text';

export default function ActivityContent({name, size, color, activity}) {
    return (
        <View style={styles.atividadesContent}>
            <Icon
                name={name}
                size={size}
                color={color}
            />
            <TextSemiBold
                texto={activity}
                style={styles.atividadesText}
            />
        </View>
    );
}