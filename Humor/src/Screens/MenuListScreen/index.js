import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../HomeScreen/style';
import { TextRegular } from '../../componentes/Text';

export default function Home() {
  return (
    <View style={styles.container}>

      <Icon
        name="bug"
        size={48}
        color='#ACACAC'
        style={styles.ImageIcon}
      />
      <TextRegular
        style={styles.TextInformation}
        texto='Essa tela está em construção...'/>
    </View>
  );
}