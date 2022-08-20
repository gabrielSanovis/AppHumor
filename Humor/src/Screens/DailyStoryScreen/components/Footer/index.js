import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Modal } from "react-native";
import { TextBold, TextRegular } from "../../../../componentes/Text";
import styles from "./style";
import api from '../../../../services/api'
import { listOfActivies } from "../Activity";
import { moodNameId } from "../Mood";

export default function Footer({ onPress }) {

    const [description, setDescription] = useState('')
    const [inputInvalid, setInputInvalid] = useState(false)

    const createMood = async () => {
        if (moodNameId, listOfActivies, description) {
            await api.post('/daily_entries', {
                "daily_entry": {
                    "mood": moodNameId,
                    "activity_ids": listOfActivies,
                    "description": description
                }
            }).then(onPress)
                .catch((err) => console.log('deu errado' + err))
        } else {
            setInputInvalid(!inputInvalid)
        }
    }

    return (
        <>
            <Modal
                animationType='fade'
                transparent={true}
                visible={inputInvalid}
                onRequestClose={() => setInputInvalid(!inputInvalid)}
            >

                <View style={styles.container}>
                    <View style={styles.background}>

                        <View>
                            <TextBold style={[styles.mainText, styles.headerText]}>Atenção</TextBold>
                            <TextRegular style={styles.aboutHeaderText}>Sair sem salvar as alterações ?</TextRegular>
                        </View>

                        <View style={styles.footer}>
                            <TouchableOpacity
                                onPress={() => setInputInvalid(!inputInvalid)}
                            >
                                <TextBold style={[styles.mainText, styles.footerText]}>Cancelar</TextBold>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={onPress}
                            >
                                <TextBold style={[styles.mainText, styles.footerText]}>sim</TextBold>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>

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
