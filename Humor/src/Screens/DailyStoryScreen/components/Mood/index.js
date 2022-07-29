import React, { useState } from "react";
import styles from "./style";
import { View, TouchableOpacity } from 'react-native';
import Content from "./Content";
import mock from "../../../../services/mocks/DailyStory";
export let moodNameId = '';
export default function Mood() {

    const [id, setId] = useState(0);

    const focar = (id, key, indx) => {
        setId(key);
        if (key === id) {
            setId(0);
            moodNameId = '';
        }else {
            moodNameId = mock.mood[indx].nameId;
        }
        console.log(moodNameId)
    }

    return (
        <View style={styles.moodGroup}>

            {mock.mood.map((item, indx) => {
                return (
                    <TouchableOpacity
                        onPress={() => focar(id, item.id, indx)}
                        key={item.id}
                    >
                        <Content {...item} focado={id === item.id} />
                    </TouchableOpacity>
                );
            })}

        </View>
    );
}