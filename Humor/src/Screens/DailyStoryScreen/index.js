import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import ButtonTabBar from '../../componentes/ButtonTabBar/index'
import mock from '../../services/mocks/DailyStory'
import Header from './components/Header/index';
import Mood from './components/Mood';
import Activity from './components/Activity';
import Footer from './components/Footer';
import styles from './style';

export default function DailyStory({ navigation }) {

  const { header, mood, activity } = mock;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>

      <ScrollView style={{ flex: 1, backgroundColor: '#FFF', }}>


        <View style={styles.container}>

          <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.goBack()}
          >

            <ButtonTabBar
              nome="chevron-left"
              tamanho={20}
              cor={'#304FFE'}
              sizeBackground={36}

            />
          </TouchableOpacity>

          <Header {...header} />

          <Mood {...mood} />

          <Activity {...activity} />

          <Footer onPress={() => navigation.goBack()} />

        </View>

      </ScrollView>
    </>
  );
}