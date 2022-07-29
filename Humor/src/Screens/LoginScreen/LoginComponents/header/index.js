import React from 'react';
import { Image } from 'react-native';
import { TextBold } from '../../../../componentes/Text';
import styles from './style';

export default function Header({formatInvalid, userInvalid}) {
    return (
        <>
            <Image
                source={require('../../../../../assets/login.png')}
                style={styles.ImageLogin}
            />

            <TextBold
                style={{ display: formatInvalid ? 'flex' : 'none' }}
            >A formatação dos campos está errada.</TextBold>

            <TextBold
                style={{ display: userInvalid ? 'flex' : 'none' }}
            >Senha e/ou e-mail errados.</TextBold>

        </>
    );
} 