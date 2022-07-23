import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {ImageBackground, StyleSheet, SafeAreaView, useWindowDimensions, Dimensions} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState, useCallback } from "react";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  // screen navigation
  const [pickNumber, setPickNumber] = useState(undefined);
  const [isGameOver, setIsGameOver] = useState(true);

  //guess log
  const [guesses, setGuesses] = useState(0);

  // splash screen
  const [appIsReady, setAppIsReady] = useState(false);

  // custom font
  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // splash screen
  useEffect(() => {
    if (fontLoaded) {
      setAppIsReady(true);
    }
  }, [fontLoaded]);

  // splash screen
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  // set userPickedNumber + start game (not game over)
  const pickNumberHandler = (pickNumber) => {
    setPickNumber(pickNumber);
    setIsGameOver(false);
  };

  // game over
  const gameOverHandler = (numberOfGuesses) => {
    setIsGameOver(true);
    setGuesses(numberOfGuesses);
  };


  const newGameHandler = () => {
    setPickNumber(undefined);
  };

  // default screen
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;

  // after user pickNumber go to Game Screen
  if (pickNumber) {
    screen = (
      <GameScreen
        userPickedNumber={pickNumber}
        onGameOver={gameOverHandler}
        isPlaying={isGameOver}
      />
    );
  }
  // after user pick number and game is over
  if (isGameOver && pickNumber) {
    screen = (
      <GameOverScreen
        onNewGame={newGameHandler}
        pickNumber={pickNumber}
        guesses={guesses}
      />
    );
  }

  if (!fontLoaded) {
    return null;
  }



  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={{ width: "100%", height: "100%" }}
        source={require("./assets/images/rootbg.jpg")}
      >
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
