import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Vibration,
  TextInput,
  View,
  Dimensions,
  useWindowDimensions, KeyboardAvoidingView, ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../constants/Colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const textInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const { width, height } = useWindowDimensions();
  console.log(width, height);

  const textResetHandler = () => {
    setEnteredNumber("");
    Vibration.vibrate(100);
  };

  const confirmHandler = () => {
    const chosenNumber = Number(enteredNumber);

    // validate the chosen number
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid input " + enteredNumber,
        "Number must be a number between 1 and 99",
        [{ text: "okay", style: "destructive", onPress: textResetHandler }]
      );
      return;
    }
    console.log("Valid number: " + enteredNumber);
    onPickNumber(chosenNumber);
  };

  console.log("EnteredNumber " + enteredNumber); // print enteredNumber

  return (
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.container, { marginTop: height < 380 ? 10 : 100 }]}>
          <Title>Guess My Number</Title>
          <StatusBar style="light" />
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
                style={styles.textInput}
                keyboardType="number-pad"
                maxLength={2}
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={textInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={textResetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>


  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Color.accent500,
    marginBottom: 20,
    height: 50,
    width: 50,
    fontSize: 25,
    fontWeight: "bold",
    color: Color.accent500,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
