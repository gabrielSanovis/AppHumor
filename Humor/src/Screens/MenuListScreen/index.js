import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { TextRegular, TextBold, TextSemiBold } from '../../componentes/Text';
import menuMock from '../../services/mocks/MenuList'
import ModalLogout from './Modal/ModalLogout';

const logout = (navigation) => {
  navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }]
  })
}


export default function Home({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <ModalLogout
          visible={() => setModalVisible(!modalVisible)}
          onPress={() => logout(navigation)}
        />
      </Modal>

      <Image
        style={styles.imgWrapper}
        source={menuMock.header.image}
      />

      <TextRegular style={styles.welcomeText}>Olá, {menuMock.header.name}</TextRegular>

      <View style={styles.contactWrapper}>
        <TextBold style={styles.contactText}>E-MAIL: <TextSemiBold>{menuMock.contact.email}</TextSemiBold></TextBold>
        <TextBold style={styles.contactText}>GÊNERO: <TextSemiBold>{menuMock.contact.genero}</TextSemiBold></TextBold>
        <TextBold style={styles.contactText}>DATA DE NASCIMENTO: <TextSemiBold>{menuMock.contact.dataNascimento}</TextSemiBold></TextBold>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditProfileScreen', menuMock)
        }}
        style={styles.btn}
      >
        <TextBold style={styles.btnText}>Editar Perfil</TextBold>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.btn, styles.secondeBtn]}
      >
        <TextBold style={[styles.btnText, { color: 'black' }]}>Sair</TextBold>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imgWrapper: {
    width: 129,
    height: 129,
    marginTop: 84
  },
  welcomeText: {
    color: 'black',
    fontSize: 36,
    lineHeight: 45,
    marginTop: 46
  },
  contactWrapper: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: 30
  },
  contactText: {
    fontSize: 15,
    lineHeight: 19,
    color: 'black',
    textTransform: 'uppercase',

  },
  btn: {
    backgroundColor: '#304FFE',
    width: '85%',
    height: 52,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  secondeBtn: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black'
  },
  btnText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
    lineHeight: 19
  }

})