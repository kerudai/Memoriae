import React from "react";
import Logo from '../../comps/Logo';
import Button from '../../comps/Button';

import {View, StyleSheet, Text} from "react-native"

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
    },
    text: {
        color: "#1F1F1F",
    },
});

const FirstScreen = () => {
    return (
        <View style={styles.cont}>
            <Logo />
            <Button text="Log In" />
            <Text style={styles.text}>Forgot your password?</Text>
            <Button text="Register" />
        </View>
    );
};

export default FirstScreen;