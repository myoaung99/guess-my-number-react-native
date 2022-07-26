import React from "react";
import {View, Text, StyleSheet, Dimensions, useWindowDimensions} from "react-native";
import Color from "../../constants/Colors";


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function OpponentGuess({ children }) {
  const {width: deviceWidth} = useWindowDimensions();

  return (
    <View style={deviceWidth > 500 ? {...styles.guessContainer, padding: 10} : styles.guessContainer}>
      <Text style={styles.guessText}>{children}</Text>
    </View>
  );
}

export default OpponentGuess;

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: deviceWidth < 350 ? 20: 30,
    marginTop: deviceWidth < 350 ? 20: 30,
    borderColor: Color.accent500,

  },
  guessText: {
    color: Color.accent500,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 350 ? 26: 36,
  },
});
