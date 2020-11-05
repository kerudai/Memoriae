import React from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import Button1 from '../../comps/Button';
import CloseIcon from '../../comps/CloseIcon';
import PassInput from '../../comps/PassInput';

import {View, StyleSheet, Text} from "react-native"
import CenterView from "../../storybook/stories/CenterView";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height:690,
    },
    main: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    Mlogo: {
        position: "absolute",
        left: 5,
        top: 10,
    },
    close: {
        position: "absolute",
        right: 30,
        top: 35,
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
        <View style={styles.main}>
        <View style={[globalstyle.rows, styles.cont]}>
            <View style={styles.Mlogo}>
            <SmallLogo />
            </View>
            <View style={styles.close}>
            <CloseIcon />
            </View>
            <View style={styles.inner}>
                <View style={styles.input}>
                    <Input placeholder="Username"/>
                </View>
                <View style={styles.input}>
                    <PassInput placeholder="Password" />
                </View>
                <View style={styles.button}>
                    <Button1 style={styles.button} text="Log In" />
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
        </View>
    );
};

export default LogInScreen;