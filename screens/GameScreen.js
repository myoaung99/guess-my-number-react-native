import React, { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import OpponentGuess from "../components/game/OpponentGuess";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "../components/game/GuessLog";

// include min exclude max
function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === parseInt(exclude)) {
    generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userPickedNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userPickedNumber); // use only first time
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  //guess log
  const [guesses, setGuesses] = useState([initialGuess]);

  console.log("Min: " + minBoundary, "Max: " + maxBoundary);

  console.log("On Going Guesses: " + guesses);

  useEffect(() => {
    if (currentGuess === parseInt(userPickedNumber)) {
      // reset min, max boundaries on game over for next new game
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver(guesses.length);
    }
  }, [currentGuess, userPickedNumber, onGameOver]);

  const directionHandler = (direction) => {
    // direction => 'lower' or 'greater'
    if (
      (direction === "lower" && currentGuess < userPickedNumber) ||
      (direction === "greater" && currentGuess > userPickedNumber)
    ) {
      Alert.alert("Stop lying!", "You know this is not true.", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    // record guesses
    setGuesses((previousGuess) => [newRandomNumber, ...previousGuess]);
  };

  // number of round = array length - index
  const guessRoundListLength = guesses.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <OpponentGuess>{currentGuess}</OpponentGuess>

      <Card>
        <InstructionText>Higher or Lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={directionHandler.bind(this, "greater")}>
              <Ionicons name="add" size={20} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={directionHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={20} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.guessLogContainer}>
        <FlatList
          data={guesses}
          renderItem={({ item, index }) => (
            <GuessLog round={guessRoundListLength - index} item={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 16,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  guessLogContainer: {
    flex: 1,
    marginTop: 30,
  },
});
