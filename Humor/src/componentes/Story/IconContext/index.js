import React from "react";
import { View } from "react-native";
import ActivityItem from "../activityItem";
import styles from "./style";

export default function IconContext(props) {

    const { name: {firstIcon, middleIcon, lastIcon }, activity: {firstName, middleName, lastName }, size = 27, color = 'white'  } = props;

    return (
        <View style={[styles.iconWrapperContext, , styles.elevation]}>
            <ActivityItem
                name={firstIcon}
                size={size}
                color={color}
                activity={firstName}
            />
            <ActivityItem
                name={middleIcon}
                size={size}
                color={color}
                activity={middleName}
            />
            <ActivityItem
                name={lastIcon}
                size={size}
                color={color}
                activity={lastName}
            />
        </View>
    );
}