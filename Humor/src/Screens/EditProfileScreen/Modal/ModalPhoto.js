import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextBold } from '../../../componentes/Text/index'
import ButtonTabBar from '../../../componentes/ButtonTabBar/index'
export default function ModalPhoto({ visible }) {
    const [id, setId] = useState(0);

    const focar = (id, key) => {
        setId(key);
        if (key === id) {
            setId(0)
        }
    }
    return (


        <View style={styles.container}>
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
                    <TouchableOpacity
                        onPress={() => focar(id, 1)}
                        style={{alignContent: 'center', justifyContent: 'center'}}
                    >
                        <View style={[styles.moodPress, id === 1 ? styles.activityBg : null]}>
                            <Image
                                style={styles.imgWrapper}
                                source={require('../../../../assets/humores/happy.png')}
                            />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => focar(id, 2)}
                        style={{alignContent: 'center', justifyContent: 'center'}}
                    >
                        <View style={[styles.moodPress, id === 2 ? styles.activityBg : null]}>
                            <Image
                                style={styles.imgWrapper}
                                source={require('../../../../assets/humores/happy.png')}
                            />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => focar(id, 3)}
                        style={{alignContent: 'center', justifyContent: 'center'}}
                    >
                        <View style={[styles.moodPress, id === 3 ? styles.activityBg : null]}>
                            <Image
                                style={styles.imgWrapper}
                                source={require('../../../../assets/humores/happy.png')}
                            />

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.lineWrapper}>
                <TouchableOpacity
                        onPress={() => focar(id, 4)}
                        style={{alignContent: 'center', justifyContent: 'center'}}
                    >
                        <View style={[styles.moodPress, id === 4 ? styles.activityBg : null]}>
                            <Image
                                style={styles.imgWrapper}
                                source={require('../../../../assets/humores/happy.png')}
                            />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => focar(id, 5)}
                        style={{alignContent: 'center', justifyContent: 'center'}}
                    >
                        <View style={[styles.moodPress, id === 5 ? styles.activityBg : null]}>
                            <Image
                                style={styles.imgWrapper}
                                source={require('../../../../assets/humores/happy.png')}
                            />

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => focar(id, 6)}
                        style={{alignContent: 'center', justifyContent: 'center'}}
                    >
                        <View style={[styles.moodPress, id === 6 ? styles.activityBg : null]}>
                            <Image
                                style={styles.imgWrapper}
                                source={require('../../../../assets/humores/happy.png')}
                            />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                onPress={visible}
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