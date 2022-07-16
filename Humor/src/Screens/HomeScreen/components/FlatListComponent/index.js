import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import HeaderContent from '../HeaderContent/index';
import IconAndActivity from '../iconAndActivity/index';
import styles from "./style";
import { TextRegular } from "../../../../componentes/Text/index";


export default Item = ({ now, image, date, humor, icon, activity, about, onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={onPress}
            style={styles.contentWrapper}>
            <View style={styles.headerWrapper}>

                <Image
                    source={image}
                    style={styles.imgWrapper}
                />

                <HeaderContent
                    now={now}
                    date={date}
                    humor={humor}
                />
            </View>

            <IconAndActivity
                iconName={icon}
                activity={activity}
            />

            <TextRegular
                numberOfLines={1}
                style={styles.footerText}
            >{about}</TextRegular>
        </TouchableOpacity>
    </View>
);