import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextBold } from '../../../componentes/Text/index'
import ButtonTabBar from '../../../componentes/ButtonTabBar/index'
import api from '../../../services/api';
import Loading from '../../../componentes/Loading/index'
export default function ModalPhoto({ visible }) {
    const [id, setId] = useState(0);
    const [photosBD, setPhotosBD] = useState();
    const [isLoad, setIsLoad] = useState(true)


    const getPhotos = async () => {

        await api.get('/photos')
            .then((res) => setPhotosBD(res?.data))
            .catch(err => console.log('erro no get da fotos ' + err))
            .finally(() => setIsLoad(false))
    }

    useEffect(() => {
        getPhotos()
    }, [])

    const focar = (id, key) => {
        setId(key);
        if (key === id) {
            setId(0)
        }
    }
    return (


        <View style={styles.container}>

            <Loading visible />

            <TouchableOpacity
                onPress={visible}
                style={styles.goBack}
            >
                <ButtonTabBar
                    nome="chevron-left"
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
                                onPress={() => focar(id, 1)}
                                style={{ alignContent: 'center', justifyContent: 'center' }}
                            >
                                <View style={[styles.moodPress, id === 1 ? styles.activityBg : null]}>
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
                                onPress={() => focar(id, 1)}
                                style={{ alignContent: 'center', justifyContent: 'center' }}
                            >
                                <View style={[styles.moodPress, id === 1 ? styles.activityBg : null]}>
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
                style={styles.btn}
            >
                <TextBold style={styles.btnText}>Confirmar</TextBold>
            </TouchableOpacity>

        </View>


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

})