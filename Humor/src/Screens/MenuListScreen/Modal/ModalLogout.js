import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextBold, TextRegular } from '../../../componentes/Text/index'



export default function ModalLogout({ visible, onPress }) {

    

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
                        onPress={onPress}
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