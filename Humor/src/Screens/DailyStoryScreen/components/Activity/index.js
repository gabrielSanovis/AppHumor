import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Modal } from "react-native";
import { TextBold, TextRegular } from "../../../../componentes/Text";
import styles from "./style";
import Content from './Content/index';
import mock from "../../../../services/mocks/DailyStory";
export let listOfActivies = [];
export default function Activity() {
    const [array, setArray] = useState([])
    const [id, setId] = useState(0) // forma para atualizar a lista
    const [warning, setWarning] = useState(false)

    const focar = id => {
        if (array.length < 3 && !array.includes(id)) {
            array.push(id);
            setId(id) //fazer um "updateMount"
        } else if (array.includes(id)) {
            const remove = array.indexOf(id);
            array.splice(remove, 1);
            setId(id * 10) //gera um valor aleatorio para fazer um "updatemount"
        }
        listOfActivies = array; // lista que ira para o post Create Entry
        console.log(listOfActivies)
        if(array.length === 3 && !array.includes(id)) {
            setWarning(true)
        }

    }

    


    return (
        <>
            <Modal
                animationType='fade'
                transparent={true}
                visible={warning}
                onRequestClose={() => setWarning(!warning)}
            >

                <View style={styles.container}>
                    <View style={styles.background}>

                        <View>
                            <TextBold style={[styles.mainText, styles.headerText]}>Atenção</TextBold>
                            <TextRegular style={styles.aboutHeaderText}>Você só pode escolher até 3 atividades</TextRegular>
                        </View>

                        <View style={styles.footer}>
                            <TouchableOpacity
                                onPress={() => setWarning(!warning)}
                            >
                                <TextBold style={[styles.mainText, styles.footerText]}>Entendi</TextBold>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.activityBox}>

                <View style={styles.activityGroup}>
                    {mock.activity.slice(0, 3).map(item => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => focar(item.id)}>
                                <Content {...item} focado={array.includes(item.id)} />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={styles.activityGroup}>

                    {mock.activity.slice(3, 6).map(item => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => focar(item.id)}>
                                <Content {...item} focado={array.includes(item.id)} />
                            </TouchableOpacity>
                        );
                    })}

                </View>


                <View style={styles.activityGroup}>

                    {mock.activity.slice(6).map(item => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => focar(item.id)}>
                                <Content {...item} focado={array.includes(item.id)} />
                            </TouchableOpacity>
                        );
                    })}

                </View>

            </View>
        </>
    );
}