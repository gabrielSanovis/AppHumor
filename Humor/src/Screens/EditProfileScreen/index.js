import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal } from 'react-native';
import { TextBold } from '../../componentes/Text/index'
import api from '../../services/api';
import ModalPhoto from './Modal/ModalPhoto';

export default function Profile({ route, navigation }) {
    const { name, email, gender, birthdate, mainPhoto } = route.params;
    const [ modalVisible, setModalVisible ] = useState(false);

    return (

        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={130}

            enabled={true}
        >
            <View style={styles.container}>
                <Image
                    style={styles.imgWrapper}
                    source={{uri:`${api.defaults.baseURL}${mainPhoto}`}}
                />

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <ModalPhoto visible={() => setModalVisible(!modalVisible)}/>
                </Modal>

                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.photoBtn}
                >
                    <TextBold style={styles.photoBtnText}>Alterar Foto</TextBold>
                </TouchableOpacity>

                <View style={{ width: '85%', alignItems: 'flex-start' }}>
                    <TextBold style={styles.textTopInput}>Nome</TextBold>
                    <TextInput
                        defaultValue={name}
                        style={styles.inputBg}
                    />
                </View>

                <View style={{ width: '85%', alignItems: 'flex-start' }}>
                    <TextBold style={styles.textTopInput}>E-mail</TextBold>
                    <TextInput
                        defaultValue={email}
                        style={styles.inputBg}
                    />
                </View>

                <View style={{ width: '85%', alignItems: 'flex-start' }}>
                    <TextBold style={styles.textTopInput}>Gênero</TextBold>
                    <TextInput
                        defaultValue={gender}
                        style={styles.inputBg}
                    />
                </View>

                <View style={{ width: '85%', alignItems: 'flex-start' }}>
                    <TextBold style={styles.textTopInput}>Data de nascimento</TextBold>
                    <TextInput
                        defaultValue={birthdate}
                        style={styles.inputBg}
                    />
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={styles.btn}
                >
                    <TextBold style={styles.btnText}>Salvar</TextBold>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    imgWrapper: {
        width: 129,
        height: 129,
        marginTop: 64
    },
    photoBtn: {
        backgroundColor: 'rgba(48, 79, 254, 0.14);',
        width: 182,
        height: 50,
        borderWidth: 2,
        borderColor: 'rgba(48, 79, 254, 0.28)',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40
    },
    photoBtnText: {
        color: '#304FFE',
        textTransform: 'uppercase',
        fontSize: 15,
        lineHeight: 19
    },
    textTopInput: {
        color: 'black',
        fontSize: 15,
        lineHeight: 19,
        textTransform: 'uppercase',
        marginVertical: 8
    },
    inputBg: {
        height: 44,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        color: 'black',
        paddingHorizontal: 17,
        textTransform: 'uppercase',
        fontFamily: 'SourceSansPro-SemiBold'
    },
    btn: {
        backgroundColor: '#304FFE',
        width: '85%',
        height: 52,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    btnText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        lineHeight: 19
    }
})