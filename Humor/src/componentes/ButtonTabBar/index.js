import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';


export default function MyIcon(props) {

    return (
        <View style={[props.cor == 'white' ? styles.containerActive : styles.container,
        { height: props.sizeBackground ? props.sizeBackground : 44, width: props.sizeBackground ? props.sizeBackground : 44 }
        ]}>
            <Icon
                name={props.nome}
                size={props.tamanho}
                color={props.cor} />
        </View>
    );


} 