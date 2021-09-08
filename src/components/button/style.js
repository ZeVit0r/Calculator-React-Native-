import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width/4,
    width: Dimensions.get('window').width/4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: "center",
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#25B0FE',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width/4)*2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width/4)*3
  }
})

export default style