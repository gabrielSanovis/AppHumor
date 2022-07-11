import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#304FFE',
    height: '100%',
    alignItems: 'center'
  },
  buttonEnter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#C6CEFF",
    borderRadius: 10,
    width: 133,
    height: 46,
    marginTop: 68
  },
  buttonTextEnter: {
    color: '#304FFE',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro',
    textTransform: 'uppercase'
  },
  input: {
    width: '90%',
    backgroundColor: "#F7F7F7",
    marginTop: 21,
    paddingLeft: 20,
    borderRadius: 10
  },
  ImageLogin: {
    width: 228,
    height: 228,
    marginTop: 71,
    marginBottom: 58
  }
});

export default styles;