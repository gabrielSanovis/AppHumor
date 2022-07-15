import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';


export default function MyIcon(props) {

    const { focused, sizeBackground, cor, tamanho, nome } = props;

    return (
        <View style={[styles.container,
        { backgroundColor: focused ? `rgba(48,79,254, 1)` : `rgba(48,79,254, 0.1)` },
        { height: sizeBackground ? sizeBackground : 44, width: sizeBackground ? sizeBackground : 44 }
        ]}>
            <Icon
                name={nome}
                size={tamanho}
                color={cor}
            />
        </View>
    );
} 