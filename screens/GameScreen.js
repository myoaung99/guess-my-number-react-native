import React from 'react';
import Title from './../components/Title';
import {View, Text, StyleSheet} from 'react-native';

function GameScreen(props) {
    return (
        <View style={styles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
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