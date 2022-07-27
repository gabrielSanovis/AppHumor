import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextBold, TextRegular } from '../../../componentes/Text/index';
import api from '../../../services/api';
import { array } from '../../DailyStoryScreen/components/Activity';

const logout = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }]
    })
}

export default function ModalLogout({ visible, onPress }) {

    const postLogout = async () => {
        await api.post('/oauth/revoke', {
            token: api.defaults.headers.common['Authorization'],
            client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
            client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
        })
            .then(() => {
                logout(onPress);
                api.defaults.headers.common['Authorization'] = ""
            })
            .catch(err => console.log('deu erro ' + err))
            .finally(() => console.log(api.defaults.headers.common['Authorization']))

    }


    return (


        <View style={styles.container}>
            <View style={styles.background}>

                <View>
                    <TextBold style={[styles.mainText, styles.headerText]}>Atenção</TextBold>
                    <TextRegular style={styles.aboutHeaderText}>Deseja mesmo sair?</TextRegular>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={visible}
                    >
                        <TextBold style={[styles.mainText, styles.footerText]}>Cancelar</TextBold>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={postLogout}
                    >
                        <TextBold style={[styles.mainText, styles.footerText]}>sim</TextBold>
                    </TouchableOpacity>

                </View>

            </View>


        </View>


    );
}

const styles = StyleSheet.create({
    container: {
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
        lineHeight: 30
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '45%',
        justifyContent: 'space-between'
    }

})