import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },
    goBack: {
        marginTop: 11,
        alignSelf: 'flex-start',
        marginLeft: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activityBox: {
        borderColor: 'black',
        width: 356,
        height: 480,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 50,
        paddingVertical: 70,
        paddingHorizontal: 41,
        
    },
    activityGroup: {
        flexDirection: 'row',
        
    },
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