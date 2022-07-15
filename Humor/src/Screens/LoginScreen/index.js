import React, { useState } from 'react';
import {
    TextInput,
    TouchableOpacity,
    View,
    Image,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {TextBold} from '../../componentes/Text/index.js';

import styles from './style.js';



const TelaLogin = ({ navigation }) => {
    const [formatInvalid, setFormatInvalid] = useState(false);
    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] =useState(null);
    const [password, setPassword] = useState(null);

    const emailValidator = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    const passwordValidator = /.{8,}/g
    
    const entrar = () => {
        
         if(emailValidator.test(email) && passwordValidator.test(password)) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Homepage' }]
            })
         }else {
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
            <StatusBar barStyle={'dark-content'} backgroundColor='white'/>
            <View style={styles.container}>

                <Image
                    source={require('../../../assets/login.png')}
                    style={styles.ImageLogin}
                />

                <TextBold
                texto='A formatação dos campos está errada'
                style={{display: formatInvalid ? 'flex' : 'none'}}
                />

                <TextInput
                    style={styles.input}
                    placeholder='e-mail'
                    keyboardType='email-address'
                    placeholderTextColor='#969696'
                    onChangeText={ value => setEmail(value)}

                />


                <View style={[styles.input, styles.inputArea]}>
                    <TextInput
                        style={{ width: '85%', height: 46, color: '#969696' }}
                        placeholder='senha'
                        placeholderTextColor='#969696'
                        secureTextEntry={hidePass}
                        onChangeText={ value => setPassword(value)}
                        
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