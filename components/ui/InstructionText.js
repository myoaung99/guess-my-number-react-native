import React from "react";
import {Text, StyleSheet, Dimensions} from "react-native";
import Color from "../../constants/Colors";


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
    marginBottom: deviceWidth < 350 ? 20: 30,
    color: Color.accent500,
    fontFamily: 'open-sans'
  },
});
