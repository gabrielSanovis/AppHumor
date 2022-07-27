import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import Content from './Content/index';
import mock from "../../../../services/mocks/DailyStory";
export let listOfActivies = [];
export default function Activity() {

    const [id, setId] = useState(0);
    const [array] = useState([])


    const focar = (id, key) => {

        if (key === id) {
            setId(0)
        }
        if (array.includes(key)) {
            array.splice(array.indexOf(key), 1)
        } else if (array.length < 3) {
            setId(key);
            array.push(key)
        }
        listOfActivies = array
        console.log(array)
    }


    return (
        <View style={styles.activityBox}>



            <View style={styles.activityGroup}>

                {mock.activity.slice(0, 3).map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => focar(id, item.id)}>
                            <Content {...item} focado={array.includes(item.id)} />
                        </TouchableOpacity>
                    );
                })}

            </View>


            <View style={styles.activityGroup}>

                {mock.activity.slice(3, 6).map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => focar(id, item.id)}>
                            <Content {...item} focado={array.includes(item.id)} />
                        </TouchableOpacity>
                    );
                })}

            </View>


            <View style={styles.activityGroup}>

                {mock.activity.slice(6).map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => focar(id, item.id)}>
                            <Content {...item} focado={array.includes(item.id)} />
                        </TouchableOpacity>
                    );
                })}

            </View>

        </View>
    );
}