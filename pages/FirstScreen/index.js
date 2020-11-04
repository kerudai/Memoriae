import React from "react";
import globalstyle from "../globalstyle";
import Logo from '../../comps/Logo';
import Button1 from '../../comps/Button';


import {View, StyleSheet, Text} from "react-native"
import CenterView from "../../storybook/stories/CenterView";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
    },
    Mlogo: {
        marginTop: 140,
    },
    inner: {
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 40,
        height: 200
    },
    text: {
        color: "#1F1F1F",
       
    },
    button: {

        width: 320,
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
                <Button1 style={styles.button} text="Log In" />
                </View>
                <Text style={styles.text}>Forgot your password?</Text>
                <View style={styles.button}>
                <Button1 style={styles.button} text="Register" />
                </View>
            </View>
        </View>
    );
};

export default FirstScreen;