import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Home/style';

export default function Home() {
  return (
    <View style={styles.container}>

      <Icon
        name="bug"
        size={48}
        color='#ACACAC'
        style={styles.ImageIcon}
      />
      <Text
        style={styles.TextInformation}
      >Essa tela está em construção...</Text>
    </View>
  );
}