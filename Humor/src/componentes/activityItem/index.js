    import React, {useEffect} from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './style';
import { View } from "react-native";
import { TextSemiBold } from "../Text/index";
import { icones } from "../../DATAFlatList/DATA";


export default function ActivityItem(props) {
    //guidance: faz alterações para o componente ser usado na FeedScreen quando valor dele é true
    const { name, size, color, guidance } = props;

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
                    name={icones[name].icone}
                    size={size}
                    color={color}
                />
            </View>
            <TextSemiBold
                style={[styles.activityText,
                { paddingLeft: guidance ? 8 : 0 }]}
            >
                {icones[name].name}
            </TextSemiBold>
        </View>
    );
}