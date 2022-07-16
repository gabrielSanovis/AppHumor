import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../HomeScreen/style';
import { TextRegular } from '../../componentes/Text/index'

export default function DailyStory() {
  return (
    <View style={styles.container}>

      <Icon
        name="meh-o"
        size={48}
        color='#ACACAC'
        style={styles.ImageIcon}
      />
      <TextRegular
        style={styles.TextInformation}
      >Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela</TextRegular>
    </View>
  );
}