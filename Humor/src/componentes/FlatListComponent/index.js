import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import HeaderContent from '../../componentes/StoryFeed/HeaderContent/index';
import Story from '../../componentes/StoryFeed/index';
import styles from "./style";


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
            <Text
                numberOfLines={1}
                style={styles.footerText}>{about}</Text>
        </TouchableOpacity>
    </View>
);