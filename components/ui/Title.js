import React from "react";
import {Text, StyleSheet, Dimensions, Platform} from "react-native";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    borderWidth: Platform.OS === "ios" ? 2 : 0,
    borderColor: "white",
    color: "white",
    fontFamily: "open-sans-bold",
    padding: 10,
    textAlign: "center",
    width: deviceWidth < 350 ? 280: 300,
    maxWidth: "80%",
  },
});
