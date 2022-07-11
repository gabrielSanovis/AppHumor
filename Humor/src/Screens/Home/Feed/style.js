import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        height: '100%',
        alignItems: 'center'
    },
    contentWrapper: {
        backgroundColor: 'white',
        width: 358,
        height:145,
        borderRadius:20, 
        marginTop: 23,
        justifyContent: 'center'
    },
    imgWrapper: {
        height: 57,
        width: 57
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 28,
    },
    atividadesWrapper: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 16,
    },
    footerText: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 13,
        lineHeight: 20,
        color: '#ACACAC',
        marginLeft: 28,
        marginTop: 10,
        width: 200
    },
    elevation: {
        elevation: 18,
        shadowColor: 'rgba(90, 108, 234, .5)',
    },
})

export default styles;