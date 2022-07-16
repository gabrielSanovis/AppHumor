import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';


export default PasswordInput = (props) => {

    const { onChangeText } = props;


    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={[
            styles.input,
            styles.inputArea
        ]}>
            <TextInput
                style={{ width: '85%', height: 46, color: '#969696' }}
                placeholder='senha'
                placeholderTextColor='#969696'
                secureTextEntry={hidePass}
                onChangeText={onChangeText}
            />

            <TouchableOpacity
                onPress={() => setHidePass(!hidePass)}
            >

                <Icon name={hidePass ? "eye" : 'eye-off'} color='#969696' size={20} />

            </TouchableOpacity>
        </View>
    );
}

