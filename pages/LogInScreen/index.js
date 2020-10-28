import React from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import Button from '../../comps/Button';
import CloseIcon from '../../comps/CloseIcon';

import {View, StyleSheet, Text} from "react-native"
import CenterView from "../../storybook/stories/CenterView";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
    },
    Mlogo: {
        position: "absolute",
        left: 0,
        top: 40,
    },
    close: {
        position: "absolute",
        right: 0,
        top: 55,
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
    textBold: {
        fontWeight: "bold",
    },
    textLine: {
        flexDirection: "row",
        alignItems: "center",
    },
    textW :{
        marginTop: 4,
        alignItems: "center",
    },
});

const LogInScreen = () => {
    return (
        <View style={[globalstyle.rows, styles.cont]}>
            <View style={styles.Mlogo}>
            <SmallLogo />
            </View>
            <View style={styles.close}>
            <CloseIcon />
            </View>
            <View style={styles.inner}>
                <View style={styles.input}>
                    <Input text="Username" />
                </View>
                <View style={styles.input}>
                    <Input text="Input" />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} text="Log In" />
                </View>
                <View style={styles.textW}>
                <Text style={styles.text}>Forgot your password?</Text>
                <View style={styles.textLine}>
                <Text style={styles.text}>don't have an acccount?</Text>
                <Text style={styles.textBold}> Register</Text>
                </View>
                </View>

            </View>
        </View>
    );
};

export default LogInScreen;