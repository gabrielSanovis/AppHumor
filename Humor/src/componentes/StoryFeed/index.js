import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import ActivityItem from '../Story/activityItem';


export default function Story(props) {
                                //ícones                                        //atividades
    const { iconName: { firstIcon, middleIcon, lastIcon }, activity: { firstActivity, middleActivity, lastActivity }} = props;

    return (

        <View style={styles.atividadesWrapper}>
            <ActivityItem
                guidance={true}
                name={firstIcon}
                size={21}
                color="black"
                activity={firstActivity}
            />

            <Icon name='circle' size={4.5} color='black' style={styles.Elipse} />

            <ActivityItem
                guidance={true}
                name={middleIcon}
                size={21}
                color="black"
                activity={middleActivity}
            />

            <Icon name='circle' size={4.5} color='black' style={styles.Elipse} />

            <ActivityItem
                guidance={true}
                name={lastIcon}
                size={21}
                color="black"
                activity={lastActivity}
            />

        </View>
    );
}