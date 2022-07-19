import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React,{useState} from "react";

export default function App() {
   const [pickNumber, setPickNumber] =  useState(undefined);

   const pickNumberHandler = (pickNumber)=>{
       setPickNumber(pickNumber);
   }

   console.log("pickNumber", pickNumber);

   let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>;

   if(pickNumber){
       screen = <GameScreen/>
   }
  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={{ width: "100%", height: "100%" }}
        source={require("./assets/images/rootbg.jpg")}
      >
          {screen}
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
