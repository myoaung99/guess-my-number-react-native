import React from "react";
import { View, StyleSheet } from "react-native";
import Color from "../../constants/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: Color.primary500,
    alignItems: "center",
    padding: 20,
    marginTop: 50,
    borderRadius: 10,

    elevation: 4, // android shadow

    shadowColor: "black", // iso shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
