import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import PrimaryButton from './../components/PrimaryButton';

function StartGameScreen(props) {
    const buttonPressHandler = ()=>{
        console.log('buttonPressHandler');
    }
    return (
        <ImageBackground source={require('./../assets/images/ganyu.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Text style={styles.header}>Guess My Number</Text>
                <StatusBar style="light" />
                <View style={styles.textInputContainer}>
                    <Text style={styles.textInputHeader}>Enter a Number</Text>
                    <TextInput style={styles.textInput} keyboardType="number-pad" maxLength={3}/>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={buttonPressHandler}>Reset</PrimaryButton>
                        <PrimaryButton onPress={buttonPressHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        padding: 10,
        marginBottom: 30,
        color: 'white',
        borderColor: 'white',
    },
    textInputContainer: {
        width: '100%',
        backgroundColor: '#B2C8DF',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,

        elevation: 4,

        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    textInputHeader: {
        fontSize: 20,
        marginBottom: 30,
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        marginBottom: 20,
        paddingVertical: 5,
        paddingStart: 5,
        width: 60,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});

export default StartGameScreen;