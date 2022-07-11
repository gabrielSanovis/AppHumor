import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    headerWrapper: {
        alignItems: 'center'
    },
    humorText: {
        textTransform: 'uppercase',
        color: '#E24B4B',
        fontFamily: 'SourceSansPro-Bold',
        fontSize: 20,
        marginTop: 5
    },
    imgWrapper: {
        marginTop: 33,
        width: 65,
        height: 65
    },
    footerWrapper: {
        width: 360,
        height: 89,
        backgroundColor: 'white',
        marginTop: 21,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        lineHeight: 20,
        color: '#000000',
        width: 305
    },
    goBack: {
        marginTop: 11,
        alignSelf: 'flex-start',
        marginLeft: 33,
        alignItems: 'center',
        justifyContent: 'center',
    },
    elevation: {
        elevation: 26,
        shadowColor: 'rgba(90, 108, 234, .8)',
    },
})

export default styles;