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
        marginBottom: 23,
        justifyContent: 'center',
        elevation: 15,
        shadowColor: 'rgba(90, 108, 234, .8)',
        
    },
    headerWrapper: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingLeft: 28,
    },
    imgWrapper: {
        height: 57,
        width: 57
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
    
})
export default styles;