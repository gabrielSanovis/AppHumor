import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextBold, TextRegular } from '../../../componentes/Text/index';
import api from '../../../services/api';
import styles from './style';

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

