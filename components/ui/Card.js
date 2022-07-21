import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import Color from "../../constants/Colors";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: deviceWidth < 350 ? 300 : 350,
    maxWidth: '98%',
    backgroundColor: Color.primary500,
    alignItems: "center",
    padding: 20,
    marginTop: deviceWidth < 350 ? 20 : 50,
    borderRadius: 10,

    elevation: 4, // android shadow

    shadowColor: "black", // iso shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

  },
});
