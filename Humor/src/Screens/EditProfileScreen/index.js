import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Modal } from 'react-native';
import ModalPhoto from './Modal/ModalPhoto';
import Header from './components/Header';
import ContactInformation from './components/ContactInformation';
import styles from './style';

export default function Profile({ route, navigation }) {
    const { name, email, gender, birthdate, mainPhoto, photoId } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={130}

            enabled={true}
        >
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <ModalPhoto visible={() => setModalVisible(!modalVisible)} photoId={photoId}/>
                </Modal>

                <Header photoUrl={mainPhoto} visible={() => setModalVisible(true)} />

                <ContactInformation
                    onPress={navigation}
                    selectionPhoto={modalVisible}
                    name={name}
                    email={email}
                    birthdate={birthdate}
                    gender={gender}
                />

            </View>

        </KeyboardAvoidingView>
    );
}
