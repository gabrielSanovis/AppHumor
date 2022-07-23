import React from "react";
import { View } from "react-native";
import ActivityItem from "../../../../componentes/activityItem/index";
import styles from "./style";

export default function IconContext(props) {
    //ícones                                        //atividades
    const { activity, size = 27, color = 'white' } = props;

    return (
        <View style={[styles.iconWrapperContext, styles.elevation]}>
            {activity?.map(item => {
                return (
                    <ActivityItem
                        key={item.id}
                        name={item.name}
                        size={size}
                        color={color}
                    />
                );
            })}
        </View>
    );
}