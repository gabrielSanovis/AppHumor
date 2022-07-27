import React, {useState} from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { TextBold } from "../../../../componentes/Text";
import styles from "./style";
import api from '../../../../services/api'
import { listOfActivies } from "../Activity";
import { moodNameId } from "../Mood";

export default function Footer({ onPress }) {

    const [description, setDescription] = useState('')

    const createMood = async () => {
        await api.post('/daily_entries', {
            "daily_entry": {
                "mood": moodNameId,
                "activity_ids": listOfActivies,
                "description": description
            }
        }).then(onPress)
        .catch((err) => console.log('deu errado' + err))
    }

    return (
        <>
            <View style={styles.inputArea}>
                <TextInput
                    multiline={true}
                    style={styles.input}
                    placeholder='Escreva aqui o que aconteceu hoje...'
                    placeholderTextColor='#969696'
                    onChangeText={value => setDescription(value)}
                />
            </View>

            <TouchableOpacity
                onPress={() => createMood()}
                style={styles.btnSalvar}
            >
                <TextBold style={styles.btnText}>Salvar</TextBold>
            </TouchableOpacity>
        </>
    );
}
