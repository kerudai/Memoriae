import React from "react";
import globalstyle from "../globalstyle";
import Logo from '../../comps/Logo';
import Button1 from '../../comps/Button';

import { NativeRouter, Route, Link } from "react-router-native";

import {View, StyleSheet, Text, ScrollView} from "react-native"
import CenterView from "../../storybook/stories/CenterView";

import ForgotPassword from '../ForgotPassword';
import LogInScreen from '../LogInScreen';

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
        <NativeRouter>
        <View style={[globalstyle.rows, styles.cont]}>
            <View style={styles.Mlogo}>
            <Logo />
            </View>
            <View style={styles.inner}>
                <View style={styles.button}>
                    <Link to="/LogInScreen">
                        <View>
                        <Button1 style={styles.button} text="Log In" />
                        </View>
                    </Link>
                </View>
                <Link underlayColor="#f0f4f7" to="/ForgotPassword">
                    <Text style={styles.text}>Forgot your password?</Text>
                </Link>
                <View style={styles.button}>
                <Button1 style={styles.button} text="Register" />
                </View>
                <Route path="/ForgotPassword" component={ForgotPassword} />
                <Route path="/LogInScreen" component={LogInScreen} />
            </View>
        </View>
        </NativeRouter>
    );
};

export default FirstScreen;