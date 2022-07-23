import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome'
import ActivityItem from '../../../../componentes/activityItem/index';


export default function Story(props) {
    //ícones                                        //atividades
    const { activity } = props;
    let id = 1
    return (

        <View style={styles.atividadesWrapper}>
            {activity.map((item, index, array) => {
                return (
                    <View key={item.id} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <ActivityItem
                            guidance={true}
                            name={item.name}
                            size={21}
                            color="black"
                        />                                                                  
                        <Icon name='circle' size={4.5} color='black' style={[styles.Elipse, {display: index < array.length - 1 ? 'flex' : 'none'}]} />
                    </View >
                );
            })}

        </View>
    );
}