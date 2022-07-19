import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from "../../constants/Colors";

function OpponentGuess({children}) {
    return (
        <View style={styles.guessContainer}>
            <Text style={styles.guessText}>{children}</Text>
        </View>
    );
}

export default OpponentGuess;

const styles = StyleSheet.create({
    guessContainer: {
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        marginTop: 30,
        borderColor: Color.accent500,
        marginHorizontal: 20,
    },
    guessText: {
        color: Color.accent500,
        fontWeight: 'bold',
        fontSize: 50,
    },
})