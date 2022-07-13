import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {TextBold} from '../../componentes/Text/index.js';

import styles from './style.js';

const TelaLogin = ({ navigation }) => {
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Homepage' }]
        })
    }
    const [hidePass, setHidePass] = useState(true)

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-150}
            style={styles.keyBoardContainer}
            enabled={true}
        >

            <View style={styles.container}>

                <Image
                    source={require('../../../assets/login.png')}
                    style={styles.ImageLogin}
                />

                <TextInput
                    style={styles.input}
                    placeholder='e-mail'
                    keyboardType='email-address'
                    placeholderTextColor='#969696'
                />
                <View style={[styles.input, styles.inputArea]}>
                    <TextInput
                        style={{ width: '85%', height: 46, color: '#969696' }}
                        placeholder='senha'
                        placeholderTextColor='#969696'
                        secureTextEntry={hidePass}
                    />

                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>

                        <Icon name={hidePass ? "eye" : 'eye-off'} color='#969696' size={20} />

                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.buttonEnter}
                    onPress={() => entrar()}
                >
                    <TextBold
                        style={styles.buttonTextEnter}
                        texto='Entrar'
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default TelaLogin;