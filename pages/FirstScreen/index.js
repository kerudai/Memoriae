import React from "react";
import globalstyle from "../globalstyle";
import Logo from '../../comps/Logo';
import Button from '../../comps/Button';

import {View, StyleSheet, Text} from "react-native"
import CenterView from "../../storybook/stories/CenterView";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
    },
    Mlogo: {
        marginTop: 100,
    },
    inner: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    text: {
        color: "#1F1F1F",
        marginTop: -40
       
    },
    button: {
        margin: 10,
        width: 300,
        height: 100
    }
});

const FirstScreen = () => {
    return (
        <View style={[globalstyle.rows, styles.cont]}>
            <View style={styles.Mlogo}>
            <Logo />
            </View>
            <View style={styles.inner}>
                <View style={styles.button}>
                <Button style={styles.button} text="Log In" />
                </View>
                <Text style={styles.text}>Forgot your password?</Text>
                <View style={styles.button}>
                <Button style={styles.button} text="Register" />
                </View>
            </View>
        </View>
    );
};

export default FirstScreen;