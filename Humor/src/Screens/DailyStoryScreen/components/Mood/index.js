import React, { useState } from "react";
import styles from "./style";
import { View, TouchableOpacity } from 'react-native';
import Content from "./Content";

export default function Mood({ radiant, happy, ok, sad, terrible }) {

    const [id, setId] = useState(0);

    const focar = (id, key) => {
        setId(key);
        if (key === id) {
            setId(0)
        }
    }

    return (
        <View style={styles.moodGroup}>
            
            <TouchableOpacity
                onPress={() => focar(id, 1)}
            >
                <Content {...radiant} focado={id === 1} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => focar(id, 2)}
            >
                <Content {...happy} focado={id === 2} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => focar(id, 3)}
            >
                <Content {...ok} focado={id === 3} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => focar(id, 4)}
            >
                <Content {...sad} focado={id === 4} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => focar(id, 5)}
            >
                <Content {...terrible} focado={id === 5} />
            </TouchableOpacity>

        </View>
    );
}