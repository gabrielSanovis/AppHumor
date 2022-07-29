import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { TextBold, TextRegular } from '../../../componentes/Text/index'
import ButtonTabBar from '../../../componentes/ButtonTabBar/index'
import api from '../../../services/api';
import Loading from '../../../componentes/Loading/index'


export let putUrl = '';
export let putId;
export default function ModalPhoto({ visible, photoId }) {
    const [id, setId] = useState(photoId);
    const [photosBD, setPhotosBD] = useState();
    const [isLoad, setIsLoad] = useState(true);
    const [inputInvalid, setInputInvalid] = useState(false);

    const getPhotos = async () => {

        await api.get('/photos')
            .then((res) => setPhotosBD(res?.data))
            .catch(err => console.log('erro no get da fotos ' + err))
            .finally(() => setIsLoad(false))
    }

    useEffect(() => {
        getPhotos()
    }, [])

    const focar = (id, key, url) => {
        setId(key);
        putUrl = url;
        putId = key
        if (key === id) {
            putId = photoId
            setId(0);
            putUrl = '';
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

                <View style={styles.containerSecond}>
                    <View style={styles.background}>

                        <View>
                            <TextBold style={[styles.mainText, styles.headerText]}>Atenção</TextBold>
                            <TextRegular style={styles.aboutHeaderText}>Selecione uma foto</TextRegular>
                        </View>

                        <View style={styles.footer}>
                            <TouchableOpacity
                                onPress={() => setInputInvalid(!inputInvalid)}
                            >
                                <TextBold style={[styles.mainText, styles.footerText]}>ok</TextBold>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.container}>

                <Loading visible={isLoad} />

                <TouchableOpacity
                    onPress={visible}
                    style={styles.goBack}
                >
                    <ButtonTabBar
                        nome="remove"
                        tamanho={20}
                        cor={'#304FFE'}
                        sizeBackground={36}

                    />
                </TouchableOpacity>

                <TextBold style={styles.title}>Selecione a foto de perfil</TextBold>

                <View style={styles.imgGroup}>
                    <View style={styles.lineWrapper}>

                        {photosBD?.slice(0, 3).map(item => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => focar(id, item.id, item.url)}
                                    style={{ alignContent: 'center', justifyContent: 'center' }}
                                >
                                    <View style={[styles.moodPress, id === item.id ? styles.activityBg : null]}>
                                        <Image
                                            style={styles.imgWrapper}
                                            source={{ uri: `${api.defaults.baseURL}${item.url}` }}
                                        />

                                    </View>
                                </TouchableOpacity>
                            );
                        })}

                    </View>

                    <View style={styles.lineWrapper}>
                        {photosBD?.slice(3, 6).map(item => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => focar(id, item.id, item.url)}
                                    style={{ alignContent: 'center', justifyContent: 'center' }}
                                >
                                    <View style={[styles.moodPress, id === item.id ? styles.activityBg : null]}>
                                        <Image
                                            style={styles.imgWrapper}
                                            source={{ uri: `${api.defaults.baseURL}${item.url}` }}
                                        />

                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                <TouchableOpacity
                    onPress={
                        putUrl ? visible : () => setInputInvalid(!inputInvalid)
                    }
                    style={styles.btn}
                >
                    <TextBold style={styles.btnText}>Confirmar</TextBold>
                </TouchableOpacity>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    goBack: {
        marginTop: 11,
        alignSelf: 'flex-start',
        marginLeft: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'black',
        fontSize: 24,
        lineHeight: 36,
        marginTop: 65
    },
    imgWrapper: {
        width: 92,
        height: 92,

    },
    lineWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    imgGroup: {
        flex: 1 / 3,
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    btn: {
        backgroundColor: '#304FFE',
        width: '85%',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        position: 'absolute',
        bottom: 150
    },
    btnText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 15,
        lineHeight: 19
    },
    activityBg: {
        borderColor: 'rgba(48, 79, 254, 1)',
        backgroundColor: 'rgba(48, 79, 254, 1)',
    },
    moodPress: {
        backgroundColor: 'rgba(48, 79, 254, 0)',
        borderWidth: 5,
        borderRadius: 50,
        borderColor: 'rgba(48, 79, 254, 0)',

    },

    containerSecond: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    background: {
        backgroundColor: 'white',
        width: '90%',
        height: '23%',
        borderRadius: 25,
        padding: 20,
        justifyContent: 'space-between'
    },
    mainText: {
        color: 'black'
    },
    footerText: {
        textTransform: 'uppercase',
        fontSize: 18,
        lineHeight: 27,
    },
    headerText: {
        fontSize: 24,
        lineHeight: 36
    },
    aboutHeaderText: {
        color: '#969696',
        fontSize: 20,
        lineHeight: 30,
       
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    }

})