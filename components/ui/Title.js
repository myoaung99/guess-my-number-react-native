import React from 'react';
import {Text, StyleSheet} from "react-native";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        fontFamily: 'open-sans-bold',
        paddingVertical: 10,
        paddingHorizontal: 40,
        textAlign: 'center',
    },
})