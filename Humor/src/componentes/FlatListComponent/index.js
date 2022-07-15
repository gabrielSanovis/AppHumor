import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import HeaderContent from '../../componentes/StoryFeed/HeaderContent/index';
import Story from '../../componentes/StoryFeed/index';
import styles from "./style";
import { TextRegular } from "../Text";


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

            <Story
                iconName={icon}
                activity={activity}
            />

            <TextRegular
                texto={about}
                numberOfLines={1}
                style={styles.footerText}
            />
        </TouchableOpacity>
    </View>
);