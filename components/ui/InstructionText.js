import React from "react";
import { Text, StyleSheet } from "react-native";
import Color from "../../constants/Colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
    marginBottom: 30,
    color: Color.accent500,
    fontFamily: 'open-sans'
  },
});
