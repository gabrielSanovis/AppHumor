import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import Content from './Content/index'

export default function Activity({ descanso, encontro, filmes, compras, refeicao, festa, esporte, cozinhar, jogos }) {

    const [id, setId] = useState(0);
    const [array, setArray] = useState([]);

    const focar = (id, key) => {
        
        if (key === id) {
            setId(0)
        }
        if(array.includes(key)) {
            array.splice(array.indexOf(key), 1)
        }else if(array.length < 3){
            setId(key);
            array.push(key)
        }
        
        console.log(array)
    }

    

    return (
        <View style={styles.activityBox}>

            <View style={styles.activityGroup}>
                <TouchableOpacity onPress={() => focar(id, 1)}>
                    <Content {...compras} focado={array.includes(1)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => focar(id, 2)}>
                    <Content {...cozinhar} focado={array.includes(2)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => focar(id, 3)}>
                    <Content {...descanso} focado={array.includes(3)} />
                </TouchableOpacity>

            </View>


            <View style={styles.activityGroup}>
                <TouchableOpacity onPress={() => focar(id, 4)}>
                    <Content {...encontro} focado={array.includes(4)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => focar(id, 5)}>
                    <Content {...esporte} focado={array.includes(5)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => focar(id, 6)}>
                    <Content {...festa} focado={array.includes(6)} />
                </TouchableOpacity>

            </View>


            <View style={styles.activityGroup}>
                <TouchableOpacity onPress={() => focar(id, 7)}>
                    <Content {...filmes} focado={array.includes(7)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => focar(id, 8)}>
                    <Content {...jogos} focado={array.includes(8)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => focar(id, 9)}>
                    <Content {...refeicao} focado={array.includes(9)} />
                </TouchableOpacity>

            </View>

        </View>
    );
}