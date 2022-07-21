import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../constants/Colors";

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
        Your phone needed <Text style={styles.hightLightText}>{guesses}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.hightLightText}>{pickNumber}</Text>.
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
    width: 270,
    height: 270,
    alignItems: "center",
    margin: 30,
    borderRadius: 200,
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
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  hightLightText: {
    fontFamily: "open-sans-bold",
    color: Color.primary500,
  },
});
