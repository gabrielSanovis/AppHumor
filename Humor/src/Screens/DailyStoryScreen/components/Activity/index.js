import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import Content from './Content/index';
import mock from "../../../../services/mocks/DailyStory";
export let listOfActivies = [];
export default function Activity() {
    const [array, setArray] = useState([])
    const [id, setId] = useState(0) // forma para atualizar a lista

    const focar = id => {
        if (array.length < 3 && !array.includes(id)) {
            array.push(id);
            setId(id) //fazer um "updateMount"
        }else if (array.includes(id)) {
            const remove = array.indexOf(id);
            array.splice(remove, 1);
            setId(id * 10) //gera um valor aleatorio para fazer um "updatemount"
        }
        listOfActivies = array; // lista que ira para o post Create Entry
        console.log(listOfActivies)
        
    }


    return (
        <View style={styles.activityBox}>

            <View style={styles.activityGroup}>
                {mock.activity.slice(0, 3).map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => focar(item.id)}>
                            <Content {...item} focado={array.includes(item.id)} />
                        </TouchableOpacity>
                    );
                })}
            </View>

            <View style={styles.activityGroup}>

                {mock.activity.slice(3, 6).map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => focar(item.id)}>
                            <Content {...item} focado={array.includes(item.id)} />
                        </TouchableOpacity>
                    );
                })}

            </View>


            <View style={styles.activityGroup}>

                {mock.activity.slice(6).map(item => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => focar(item.id)}>
                            <Content {...item} focado={array.includes(item.id)} />
                        </TouchableOpacity>
                    );
                })}

            </View>

        </View>
    );
}