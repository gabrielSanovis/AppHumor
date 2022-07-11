import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

export default function ActivityContent(props) {
    return (
        <View style={styles.atividadesContent}>
            <Icon
                name={props.name}
                size={props.size}
                color={props.color}
            />
            <Text
                style={styles.atividadesText}
            >{props.activity}</Text>
        </View>
    );
}