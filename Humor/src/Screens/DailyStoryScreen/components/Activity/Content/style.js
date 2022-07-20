import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    activityWrapper: {
        alignItems: 'center'
    },
    elipse: {
        borderWidth: 1,
        width: 59,
        height: 59,
        borderColor: 'black',
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    activityText: {
        color: 'black',
        fontSize: 12,
        lineHeight: 18
    },
    activityBg: {
        backgroundColor: '#304FFE',
        borderWidth: 0
    }
})

export default styles;