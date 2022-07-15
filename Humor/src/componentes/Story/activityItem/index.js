import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './style';
import { View } from "react-native";
import { TextSemiBold } from "../../Text";


export default function ActivityItem(props) {
                                        //faz alterações para o componente ser usado na StoryScreen quando valor dele é true
    const { name, size, color, activity, guidance } = props;


    return (
        <View
            style={[styles.activityContent,
            guidance ? { flexDirection: 'row' } : null
            ]}
        >
            <View
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
                guidance ? { paddingLeft: 8 } : null]}
                texto={activity}
            />
        </View>
    );
}