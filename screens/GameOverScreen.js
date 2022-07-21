import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../constants/Colors";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const GameOverScreen = ({ onNewGame, pickNumber, guesses }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLightText}>{guesses}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highLightText}>{pickNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    alignItems: "center",
    margin: deviceWidth < 350 ? 20 : 30,

    borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: deviceWidth < 350 ? 18 : 20,
    textAlign: "center",
    marginBottom: deviceWidth < 350 ? 15 : 30,
  },
  highLightText: {
    fontFamily: "open-sans-bold",
    color: Color.primary500,
  },
});
