import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {ImageBackground, StyleSheet, SafeAreaView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import React, {useEffect, useState, useCallback} from "react";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [pickNumber, setPickNumber] = useState(undefined);
    const [isGameOver, setIsGameOver] = useState(true);

    const [appIsReady, setAppIsReady] = useState(false);

    const [fontLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

    });


    useEffect(() => {
        if (fontLoaded) {
            setAppIsReady(true);
        }
    }, [fontLoaded]);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    const pickNumberHandler = (pickNumber) => {
        setPickNumber(pickNumber);
        setIsGameOver(false);
    };

    const gameOverHandler = () => {
        setIsGameOver(true);
    };

    console.log("pickNumber", pickNumber);

    let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>;

    if (pickNumber) {
        screen = (
            <GameScreen userPickedNumber={pickNumber} onGameOver={gameOverHandler}/>
        );
    }
    if (isGameOver && pickNumber) {
        screen = <GameOverScreen/>;
    }

    return (
        <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootScreen}>
            <ImageBackground
                resizeMode="cover"
                imageStyle={styles.imageStyle}
                style={{width: "100%", height: "100%"}}
                source={require("./assets/images/rootbg.jpg")}
            >
                <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>{screen}</SafeAreaView>
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
