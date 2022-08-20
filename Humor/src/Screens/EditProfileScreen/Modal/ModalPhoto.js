import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { TextBold, TextRegular } from '../../../componentes/Text/index'
import ButtonTabBar from '../../../componentes/ButtonTabBar/index'
import api from '../../../services/api';
import Loading from '../../../componentes/Loading/index'
import PopUp from './PopUp'
import styles from './style';

export let putUrl = '';
export let putId;
export default function ModalPhoto({ visible, photoId, back }) {
    const [id, setId] = useState(0);
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

                <PopUp inputInvalid={() => setInputInvalid(!inputInvalid)} />


            </Modal>

            <View style={styles.container}>

                <Loading visible={isLoad} />

                <TouchableOpacity
                    onPress={() => {
                        if (putUrl) {
                            putUrl = ''
                        }
                        back.goBack()
                    }}
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
                        putId === photoId || putUrl && id !== 0 ? visible : () => setInputInvalid(!inputInvalid)
                    }
                    style={styles.btn}
                >
                    <TextBold style={styles.btnText}>Confirmar</TextBold>
                </TouchableOpacity>

            </View>
        </>
    );
}

