import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { TextBold, TextRegular } from '../../Text/index';

export default function HeaderContent(props) {

    const { now, date, humor } = props;
    
    const cores = {
        bem: '#E24B4B',
        mal: '#4B75E2',
        triste: '#4BE263'
    }

    return (
        <View style={styles.headerContent}>
            <TextRegular style={styles.texto} texto={ now ? `Hoje, ${date}` : date}/>
            <Text>
                <TextBold style={ [ styles.humorText, { color: cores[humor] } ] } texto={humor}/>
                <TextRegular style={ [ styles.texto, styles.hourText ] } texto=" 08:35"/>
            </Text>
        </View>
    );
}