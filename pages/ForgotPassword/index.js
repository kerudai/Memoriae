import React from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import Button from '../../comps/Button';
import CloseIcon from '../../comps/CloseIcon';

import { NativeRouter, Route, Link } from "react-router-native";

import {View, StyleSheet, Text, ScrollView, Button as NBut} from "react-native"
import CenterView from "../../storybook/stories/CenterView";
import FirstScreen from "../FirstScreen";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
    },
    Mlogo: {
        position: "absolute",
        left: 5,
        top: 40,
    },
    close: {
        position: "absolute",
        right: 20,
        top: 65,
    },
    inner: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 250,
    },
    text: {
        color: "#1F1F1F",
        margin: 5,
       
    },
    button: {
        marginTop: 70,
        width: 300,
    },
    input: {
        margin: 10,
        width: 300,
        height: 45,
    },
});

const ForgotPasswordScreen = () => {
    return (
        <View style={[globalstyle.rows, styles.cont]}>
            <View style={styles.Mlogo}>
            <SmallLogo />
            </View>
            <View style={styles.close}>
                <Link to="/" >
                    <CloseIcon />
                </Link>
            </View>
            <View style={styles.inner}>
                <View style={styles.input}>
                    <Input placeholder="Email" />
                </View>
                <Text style={styles.text}>Or</Text>
                <View style={styles.input}>
                    <Input placeholder="Account Number" />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} text="Continue" />
                </View>
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;