import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './style';
import { View } from "react-native";
import { TextSemiBold } from "../../Text";


export default function ActivityItem(props) {
    //guidance: faz alterações para o componente ser usado na StoryScreen quando valor dele é true
    const { name, size, color, activity, guidance } = props;


    return (
        <View
            style={[styles.activityContent,
            { flexDirection: guidance ? 'row' : 'column' }
            ]}
        >
            <View                //alterar esse null no futuro para algo com mais sentido...
                style={guidance ? null : styles.elipse}
            >
                <Icon
                    name={name}
                    size={size}
                    color={color}
                />
            </View>
            <TextSemiBold
                style={[styles.activityText,
                { paddingLeft: guidance ? 8 : 0 }]}
            >
                {activity}
            </TextSemiBold>
        </View>
    );
}