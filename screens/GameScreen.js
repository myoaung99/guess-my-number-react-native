import React, {useState} from 'react';
import Title from '../components/ui/Title';
import {View, Text, StyleSheet, Alert} from 'react-native';
import OpponentGuess from "../components/game/OpponentGuess";
import PrimaryButton from "../components/ui/PrimaryButton";

// include min exclude max
function generateRandomNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomNumber === parseInt(exclude)) {
        generateRandomNumber(min, max, exclude);
    }else{
        return randomNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userPickedNumber}) {
    const randomNumber = generateRandomNumber(minBoundary, maxBoundary, userPickedNumber);
    const [currentGuess, setCurrentGuess] = useState(randomNumber);

    const directionHandler = (direction)=>{ // direction => 'lower' or 'greater'
        if((direction === 'lower' && currentGuess < userPickedNumber)
            || (direction === 'greater' && currentGuess > userPickedNumber)){
            Alert.alert(
                'Stop lying!',
                'You know this is not true.',
                [{text: 'Cancel', style: 'cancel'}]
            )
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else if(direction === 'greater'){
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);

        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    // when the opponent guess is correct
    if(currentGuess === parseInt(userPickedNumber)){
        Alert.alert(
            'Bingo!',
            "I've got this",
            [{text: 'Ok', style: 'default'}]
        )
    }

    return (
        <View style={styles.screen}>
                <Title>Opponent's Guess</Title>
                <OpponentGuess>{currentGuess}</OpponentGuess>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <PrimaryButton onPress={directionHandler.bind(this, 'greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={directionHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
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