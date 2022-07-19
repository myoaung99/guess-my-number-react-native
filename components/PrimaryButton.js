import React from "react";
import {View, Text, StyleSheet, Pressable, Platform} from "react-native";

function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#620333" }}
        style={({pressed})=> pressed
            ? Platform.OS === "ios" && [styles.buttonInnerContainer, styles.pressed]
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
    margin: 4,
    overflow: 'hidden',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#ddb52f",
  },
  buttonInnerContainer: {
    backgroundColor: "#9c1a59",
    elevation: 4,
    width: '100%',
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
