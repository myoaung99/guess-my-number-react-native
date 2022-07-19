import React from 'react';
import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';

function PrimaryButton(props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({pressed})=> pressed && (Platform.OS === 'ios' && styles.iosRipple)}
                onPress={props.onPress}>

                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'cornflowerblue',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    iosRipple: {
        opacity: 0.5,
    }
})