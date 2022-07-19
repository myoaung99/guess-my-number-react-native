import React, {useState} from 'react';
import Title from '../components/ui/Title';
import {View, Text, StyleSheet} from 'react-native';
import OpponentGuess from "../components/game/OpponentGuess";

function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === exclude) {
        generateRandomNumber(min, max, exclude);
    }else{
        return randomNumber;
    }
}


function GameScreen({userPickedNumber}) {
    const randomNumber = generateRandomNumber(1,100, userPickedNumber);
    const [opponentGuess, setOpponentGuess] = useState(randomNumber);

    return (
        <View style={styles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
                <OpponentGuess>{opponentGuess}</OpponentGuess>
                <Text>Higher or Lower</Text>
                <Text>+ -</Text>
            </View>
            <View>
                <Text>Round logs</Text>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        padding: 16,
        flex: 1,
    },

})