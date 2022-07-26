import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/Colors";


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const GuessLog = ({ round, item }) => {
  return (
    <View style={styles.guessLog}>
      <Text style={styles.guess}>#{round} </Text>
      <Text style={styles.guess}>Opponent's Guess :</Text>
      <Text style={[styles.guess, styles.highLightGuess]}>{item}</Text>
    </View>
  );
};

export default GuessLog;

const styles = StyleSheet.create({
  guessLog: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 5,
    elevation: 4,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  guess: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: Colors.accent500,
  },
  highLightGuess: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
