import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';


export default function MyIcon(props) {

    const { focused, sizeBackground, cor, tamanho, nome } = props;

    return (
        <View style={[focused ? styles.containerActive : styles.container,
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