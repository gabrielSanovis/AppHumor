import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { TextBold, TextSemiBold } from "../../../../componentes/Text";
import styles from "./style";
import { genderTranslate } from "../../../../services/mocks/general";
import api from '../../../../services/api';
import { putId } from "../../Modal/ModalPhoto";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ContactInformation({ name, email, gender, birthdate, onPress }) {

    const [show, setShow] = useState(false);
    const [selectionGender, setSelectionGender] = useState(gender);

    const putGender = async () => {
        await api.put('/user', {
            "user": {
                "gender": selectionGender,
                "photo_id": putId,
            }
        }).catch(err => console.log('deu erro ' + err))
    }

    return (
        <>
            <View style={styles.contactWrapper}>
                <TextBold style={styles.textTopInput}>Nome</TextBold>
                <TextInput
                    editable={false}
                    defaultValue={name}
                    style={styles.inputBg}
                />
            </View>

            <View style={styles.contactWrapper}>
                <TextBold style={styles.textTopInput}>E-mail</TextBold>
                <TextInput
                    editable={false}
                    defaultValue={email}
                    style={styles.inputBg}
                />
            </View>

            <View style={styles.contactWrapper}>
                <TextBold style={styles.textTopInput}>Gênero</TextBold>
                <TouchableOpacity
                    style={styles.inputBg}
                    onPress={() => setShow(!show)}
                >
                    <Icon
                        name={show ? 'arrow-up' : 'arrow-down'}
                        size={20}
                        color={'black'}
                        style={{ position: 'absolute', alignSelf: 'flex-end', paddingRight: 20 }}
                    />
                    <TextSemiBold style={styles.sectionListText}>{genderTranslate[selectionGender]}</TextSemiBold>
                </TouchableOpacity>
            </View>

            <View style={{ zIndex: 1 }}>

                <View
                    style={[styles.sectionList, { display: show ? 'flex' : 'none' }]}
                >

                    <TouchableOpacity
                        onPress={() => { setSelectionGender('male'); setShow(!show) }}
                        style={styles.genderOption}
                    >
                        <TextSemiBold
                            style={styles.sectionListText}
                        >{genderTranslate.male}</TextSemiBold>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setSelectionGender('female'); setShow(!show) }}
                        style={styles.genderOption}
                    >

                        <TextSemiBold
                            style={styles.sectionListText}
                        >{genderTranslate.female}</TextSemiBold>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setSelectionGender('other'); setShow(!show) }}
                        style={styles.genderOption}
                    >
                        <TextSemiBold
                            style={styles.sectionListText}
                        >{genderTranslate.other}</TextSemiBold>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.contactWrapper}>
                <TextBold style={styles.textTopInput}>Data de nascimento</TextBold>
                <TextInput
                    editable={false}
                    defaultValue={birthdate}
                    style={styles.inputBg}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    onPress.goBack();
                    putGender();
                }}
                style={styles.btn}
            >
                <TextBold style={styles.btnText}>Salvar</TextBold>
            </TouchableOpacity>

        </>
    );
}