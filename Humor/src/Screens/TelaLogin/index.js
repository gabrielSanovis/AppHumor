import React from 'react';
import {
    TextInput,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';

import styles from './style.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const TelaLogin = ({ navigation }) => {
    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Homepage' }]
        })
    }

    return (
        <View style={styles.container}>


            <Image
                source={require('../../../assets/login.png')}
                style={styles.ImageLogin}
            />

            <TextInput
                style={styles.input}
                placeholder='e-mail'
            />
            <TextInput
                style={styles.input}
                placeholder='senha'
            />

            <TouchableOpacity
                style={styles.buttonEnter}
                onPress={() => entrar()}
            >
                <Text
                    style={styles.buttonTextEnter}
                >Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TelaLogin;