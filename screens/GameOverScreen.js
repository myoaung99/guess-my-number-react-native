import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },
});
