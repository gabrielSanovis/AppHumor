import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    activityBox: {
        borderColor: 'black',
        width: 356,
        height: 480,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 50,
        paddingVertical: 70,
        paddingHorizontal: 41,
        justifyContent: 'space-between',
    },
    activityGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    background: {
        backgroundColor: 'white',
        width: '90%',
        height: '23%',
        borderRadius: 25,
        padding: 20,
        justifyContent: 'space-between'
    },
    mainText: {
        color: 'black'
    },
    footerText: {
        textTransform: 'uppercase',
        fontSize: 18,
        lineHeight: 27,
    },
    headerText: {
        fontSize: 24,
        lineHeight: 36
    },
    aboutHeaderText: {
        color: '#969696',
        fontSize: 20,
        lineHeight: 30
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between'
    }
})

export default styles;