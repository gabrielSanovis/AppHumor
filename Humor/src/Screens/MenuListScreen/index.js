import React, { useState, useEffect } from 'react';
import { View, Modal } from 'react-native';
import api from '../../services/api';
import ModalLogout from './Modal/ModalLogout';
import { dateFormat } from '../../services/mocks/general';
import Header from './components/Header';
import Contact from './components/Contact';
import Buttons from './components/Buttons';

const logout = (navigation) => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'LoginScreen' }]
  })
}

export default function Home({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [mainPhoto, setMainPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState({});

  const getUser = async () => {
    await api.get('/user')
      .then((res) => {
        setMainPhoto(res?.data?.photo?.url)
        setName(res?.data?.name)
        setEmail(res?.data?.email)
        setGender(res?.data?.gender)
        setBirthdate(dateFormat(res?.data?.birthdate))
      })
      .catch(err => console.log('deu erro ' + err))
  }


  useEffect(() => {
    getUser()
  }, []);

  const birthdateFormat = `${birthdate.day + 1}/${birthdate.monthIndex + 1}/${birthdate.year}`;

  return (
    <View style={{ alignItems: 'center' }}>

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

      <Header urlPhoto={`${api.defaults.baseURL}${mainPhoto}`} name={name} />

      <Contact email={email} gender={gender} birthdate={birthdateFormat} />

      <Buttons
        onPressProfile={() => {
          navigation.navigate('EditProfileScreen', {
            name: name,
            email: email,
            gender: gender,
            birthdate: birthdateFormat,
            mainPhoto: mainPhoto
          })
        }}
        onPressLogout={() => setModalVisible(true)}
      />




    </View>
  );
}
