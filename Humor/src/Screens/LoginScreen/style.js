import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  keyBoardContainer: {
    flex:1,
    backgroundColor: '#304FFE',
  },
  container: {
    backgroundColor: '#304FFE',
    height: '100%',
    alignItems: 'center',
  },
  buttonEnter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C6CEFF",
    borderRadius: 10,
    width: '32%',
    height: 46,
    marginTop:'14%'
  },
  buttonTextEnter: {
    color: '#304FFE',
    fontSize: 15,
    textTransform: 'uppercase'
  },
  inputArea: {
    alignItems: 'center', 
    flexDirection: 'row' 
  },
  input: {
    width: '75%',
    height: 46,
    backgroundColor: "#F7F7F7",
    marginTop: '5%',
    paddingLeft: '4%',
    borderRadius: 10,
    color:'#969696'
  },
  ImageLogin: {
    width: '54%',
    height: 228,
    marginBottom: '7%',
    marginTop: 94
  }
});

export default styles;