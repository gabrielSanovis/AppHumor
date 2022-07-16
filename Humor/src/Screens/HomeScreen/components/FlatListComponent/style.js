import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',     
    },
    contentWrapper: {
        backgroundColor: 'white',
        width: 358,
        height:145,
        borderRadius:20, 
        marginVertical: 13,
        justifyContent: 'center',
        elevation: 15,
        shadowColor: 'rgba(90, 108, 234, .8)',
        alignItems: 'flex-start',
        paddingLeft: 28,
        
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    imgWrapper: {
        height: 57,
        width: 57
    },
    footerText: {
        fontSize: 13,
        lineHeight: 20,
        color: '#ACACAC',
        paddingVertical:10,
        width: 200,
    },
    
})
export default styles;