import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Home/style';

export default function DailyStory() {
  return (
    <View style={styles.container}>

      <Icon
        name="meh-o"
        size={48}
        color='#ACACAC'
        style={styles.ImageIcon}
      />
      <Text
        style={styles.TextInformation}
      >Você ainda não tem nenhum registro diário. Para começar, toque no ícone de adicionar na tela.</Text>
    </View>
  );
}