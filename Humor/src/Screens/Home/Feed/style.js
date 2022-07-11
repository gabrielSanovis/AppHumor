import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F1F1F1',
        height: '100%',
        alignItems: 'center'
    },
    contentWrapper: {
        backgroundColor: 'white',
        width: 368,
        height:158,
        borderRadius:20, 
        marginTop: 25,
    },
    imgWrapper: {
        height: 57,
        width: 57
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingLeft: 28,
    },
    atividadesWrapper: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 16,
    },
    footerText: {
        fontFamily: 'Source Sans Pro',
        fontSize: 13,
        lineHeight: 20,
        fontWeight: '400',
        color: '#ACACAC',
        marginLeft: 28,
        marginTop: 10
    }
})

export default styles;