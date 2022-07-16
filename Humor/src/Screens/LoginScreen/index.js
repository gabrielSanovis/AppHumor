import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import { TextBold } from '../../componentes/Text/index.js';
import PassWordInput from '../../componentes/LoginComponents/PassWordInput/index';
import styles from './style.js';


const TelaLogin = ({ navigation }) => {
    const [formatInvalid, setFormatInvalid] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const emailValidator = /^[\w.!#$%&'*+\/=?^_`{|}~-]+@\w(?:\w{0,61}\w)?(?:\.\w(?:[\w-]{0,61}\w)?)*$/gi;
    const passwordValidator = /.{8,}/g

    const entrar = () => {

        if (emailValidator.test(email) && passwordValidator.test(password)) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Homepage' }]
            })
        } else {
            setFormatInvalid(true);
            setTimeout(() => setFormatInvalid(false), 3000);
        }
    }

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
            <View style={styles.container}>

                <Image
                    source={require('../../../assets/login.png')}
                    style={styles.ImageLogin}
                />

                <TextBold
                    style={{ display: formatInvalid ? 'flex' : 'none' }}
                >A formatação dos campos está errada</TextBold>

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