import React, { useState, useEffect } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import { TextBold } from '../../componentes/Text/index.js';
import PassWordInput from './LoginComponents/PassWordInput/index';
import styles from './style.js';
import Autenticacao from './autenticacao.js';
import Loading from '../../componentes/Loading/index.js';
import Header from './LoginComponents/header/index.js';


const TelaLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { entrar, formatInvalid, userInvalid, isLoad } = Autenticacao(email, password, navigation);

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-150}
            style={styles.keyBoardContainer}
            enabled={true}
        >
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor='white'
            />

            <Loading visible={isLoad} />
            <View style={styles.container}>

                <Header formatInvalid={formatInvalid} userInvalid={userInvalid}/>

                <TextInput
                    style={styles.input}
                    placeholder='e-mail'
                    keyboardType='email-address'
                    placeholderTextColor='#969696'
                    onChangeText={value => setEmail(value)}
                />

                <PassWordInput
                    onChangeText={value => setPassword(value)}
                />

                <TouchableOpacity
                    style={styles.buttonEnter}
                    onPress={() => entrar()}
                >
                    <TextBold
                        style={styles.buttonTextEnter}
                    >Entrar</TextBold>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default TelaLogin;