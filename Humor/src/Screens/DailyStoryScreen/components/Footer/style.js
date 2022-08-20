import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputArea: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        marginTop: 22,
    },
    input: {
        width: 356,
        paddingHorizontal: 12,
        textAlign: 'left',
        textAlignVertical: 'top',
        height: 90,
        color: 'black'

    },
    btnSalvar: {
        backgroundColor: '#304FFE',
        height: 52,
        width: 356,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 22,
        marginBottom: 58
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        lineHeight: 19,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
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
        alignSelf: 'flex-end',
        width: '45%',
        justifyContent: 'space-between'
    }
})



export default styles;