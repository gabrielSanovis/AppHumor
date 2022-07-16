import React from "react";
import { View } from "react-native";
import ActivityItem from "../../../../componentes/activityItem/index";
import styles from "./style";

export default function IconContext(props) {
                                //ícones                                        //atividades
    const { name: {firstIcon, middleIcon, lastIcon }, activity: {firstActivity, middleActivity, lastActivity }, size = 27, color = 'white'  } = props;

    return (
        <View style={[styles.iconWrapperContext, , styles.elevation]}>
            <ActivityItem
                name={firstIcon}
                size={size}
                color={color}
                activity={firstActivity}
            />
            <ActivityItem
                name={middleIcon}
                size={size}
                color={color}
                activity={middleActivity}
            />
            <ActivityItem
                name={lastIcon}
                size={size}
                color={color}
                activity={lastActivity}
            />
        </View>
    );
}