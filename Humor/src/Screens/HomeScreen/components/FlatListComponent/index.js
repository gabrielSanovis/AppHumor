import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import HeaderContent from '../HeaderContent/index';
import IconAndActivity from '../iconAndActivity/index';
import styles from "./style";
import { TextRegular } from "../../../../componentes/Text/index";
import { emojis } from "../../../../services/mocks/general";



export default Item = ({ date, humor, activity, about, onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.contentWrapper}>
                <View style={styles.headerWrapper}>

                    <Image
                        source={emojis[humor]}
                        style={styles.imgWrapper}
                    />

                    <HeaderContent
                        date={date}
                        humor={humor}
                    />
                </View>

                <IconAndActivity
                    activity={activity}
                />

                <TextRegular
                    numberOfLines={1}
                    style={styles.footerText}
                >{about}</TextRegular>
            </TouchableOpacity>
        </View>
    );
}