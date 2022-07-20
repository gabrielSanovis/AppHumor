import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerTitle: {
        color: 'black',
        fontSize: 30,
        lineHeight: 45,
        marginTop: 55
    },
    headerDateWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 12
    },headerDate: {
        color: '#969696',
        textTransform: 'uppercase',
        fontSize: 16,
        lineHeight: 24
      },
})

export default styles;