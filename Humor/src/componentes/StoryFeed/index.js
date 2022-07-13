import React from 'react';
import { View } from 'react-native';
import styles from './style';
import ActivityContent from './ActivityContent';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Story(props) {

    const { iconName: { firstIcon, middleIcon, lastIcon }, activity: { firstName, middleName, lastName } } = props

    return (

        <View style={styles.atividadesWrapper}>
            <ActivityContent
                name={firstIcon}
                size={21}
                color="black"
                activity={firstName}
            />

            <Icon name='circle' size={4.5} color='black' style={styles.Elipse} />

            <ActivityContent
                name={middleIcon}
                size={21}
                color="black"
                activity={middleName}
            />

            <Icon name='circle' size={4.5} color='black' style={styles.Elipse} />

            <ActivityContent
                name={lastIcon}
                size={21}
                color="black"
                activity={lastName}
            />

        </View>
    );
}