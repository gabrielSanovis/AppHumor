import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './style';
import { View, Text } from "react-native";


export default function ActivityItem(props) {
    
    const { name, size, color, activity } = props;

    return (
        <View style={styles.activityContent}>
            <View style={styles.elipse}>
                <Icon
                    name={name}
                    size={size}
                    color={color}
                />
            </View>
            <Text style={styles.activityText}>{activity}</Text>
        </View>
    );
}