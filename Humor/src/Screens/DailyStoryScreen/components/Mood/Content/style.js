import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageMoodWrapper: {
        width: 43,
        height: 43,
        
    },
    moodWrapper: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    moodText: {
        fontSize: 11,
        lineHeight: 16,
        textTransform: 'uppercase',
    },
    moodPress: {
        backgroundColor: 'rgba(48, 79, 254, 0)',
        borderWidth:5,
        borderRadius: 50,
        borderColor: 'rgba(48, 79, 254, 0)'
    },
    activityBg: {
        borderColor: 'rgba(48, 79, 254, 1)',
        backgroundColor: 'rgba(48, 79, 254, 1)',
    }
})

export default styles;