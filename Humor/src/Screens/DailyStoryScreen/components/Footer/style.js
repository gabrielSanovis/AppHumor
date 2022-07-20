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
    }
})



export default styles;