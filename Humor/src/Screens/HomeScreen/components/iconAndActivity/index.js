import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import ActivityItem from '../../../../componentes/activityItem/index';


export default function Story(props) {

    function parandoElipses(index, array) {
        //Se for a última atividade ele não mostra o elipse na frente dela
        return index < array.length - 1? 'flex' : 'none' 
    }

    const { activity } = props;
    return (

        <View style={styles.atividadesWrapper}>
            {activity.map((item, index, array) => {
                return (
                    <View key={item.id} style={styles.container}>
                        <ActivityItem
                            guidance={true}
                            name={item.name}
                            size={21}
                            color="black"
                        />                                                                          
                        <Icon name='circle' size={4.5} color='black' style={[styles.Elipse, {display: parandoElipses(index, array)}]} />
                    </View >
                );
            })}

        </View>
    );
}