import React from 'react';
import { View, ScrollView } from 'react-native';
import mock from '../../services/mocks/DailyStory'
import Header from './components/Header/index';
import Mood from './components/Mood';
import Activity from './components/Activity';
import Footer from './components/Footer';
import styles from './style';
import BtnGoBack from '../../componentes/goBackBtn/index';

export default function DailyStory({ navigation }) {

  const { header, mood } = mock;

  return (
    <>

      <ScrollView style={{ flex: 1, backgroundColor: '#FFF', }}>


        <View style={styles.container}>

          <BtnGoBack back={navigation}/>

          <Header {...header} />

          <Mood {...mood} />

          <Activity/>

          <Footer onPress={() => navigation.goBack()}/>

        </View>

      </ScrollView>
    </>
  );
}