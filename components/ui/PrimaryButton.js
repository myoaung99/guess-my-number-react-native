import React from "react";
import Color from '../../constants/Colors';
import {View, Text, StyleSheet, Pressable, Platform} from "react-native";

function PrimaryButton(props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                android_ripple={{color: "#8b0b4f"}}
                style={({pressed}) => pressed
                    ? (Platform.OS === "ios" && [styles.buttonInnerContainer, styles.pressed])
                    : styles.buttonInnerContainer}
                onPress={props.onPress}
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 8,
        overflow: 'hidden',
        borderRadius: 28,
    },
    buttonInnerContainer: {
        backgroundColor: Color.primary400,
        elevation: 4,
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        color: "white",
        textAlign: "center",
    },
    iosRipple: {
        opacity: 0.5,
    },
    pressed: {
        opacity: 0.75,
    }
});
