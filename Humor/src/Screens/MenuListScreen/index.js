import React, { useState, useEffect } from 'react';
import { View, Modal } from 'react-native';
import api from '../../services/api';
import ModalLogout from './Modal/ModalLogout';
import { dateFormat } from '../../services/mocks/general';
import Header from './components/Header';
import Contact from './components/Contact';
import Buttons from './components/Buttons';
import Loading from '../../componentes/Loading';


export default function Home({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [mainPhoto, setMainPhoto] = useState('');
  const [photoId, setPhotoId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState({});
  const [isLoad, setIsLoad] = useState(true)

  const getUser = async () => {
    await api.get('/user')
      .then((res) => {
        setMainPhoto(res?.data?.photo?.url)
        setPhotoId(res?.data?.photo?.id)
        setName(res?.data?.name)
        setEmail(res?.data?.email)
        setGender(res?.data?.gender)
        setBirthdate(dateFormat(res?.data?.birthdate))
      })
      .catch(err => console.log('deu erro ' + err))
      .finally(() => setIsLoad(false))
  }


  useEffect(() => {
    getUser()
  }, []);

  useEffect(() => {
    const atualiza = navigation.addListener('focus', () => {
      setIsLoad(true);
      getUser();
    })
  }, [])

  const birthdateFormat = `${birthdate.day}/${birthdate.monthIndex}/${birthdate.year}`;

  return (
    <View style={{ alignItems: 'center' }}>

      <Loading visible={isLoad} />

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <ModalLogout
          visible={() => setModalVisible(!modalVisible)}
          onPress={navigation}
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
            mainPhoto: mainPhoto,
            photoId: photoId
          })
        }}
        onPressLogout={() => setModalVisible(true)}
      />
    </View>
  );
}
