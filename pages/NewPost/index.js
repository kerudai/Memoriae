import React from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import UploadMedia from '../../comps/UploadMedia';
import CloseIcon from '../../comps/CloseIcon';

import {View, StyleSheet, Text} from "react-native"
import CenterView from "../../storybook/stories/CenterView";
import { color } from "@storybook/addon-knobs";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
        margin: 15,
        borderRadius: 5,
        // justifyContent: "center"
    },
    header: {
       flexDirection: "row",
       justifyContent: "space-evenly",
       width: 500,
       alignItems: "baseline",
       marginTop: 10,
       marginBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
    },
    NextT: {
        color: "#2A3858",
        fontWeight: "bold",
        fontSize: 14
    },
    inner: {
        alignItems: "center",
    },
    line: {
        width: 340,
        height: 1,
        borderColor: "black",
        borderWidth: 0.5,
        marginTop: 2,
    },
    text: {
        fontSize: 16,
    },
    button: {
        // alignItems: "center",
        // position: "absolute",
        bottom: 70,
        width: 320,
        maxHeight: 50,

    },
    date: {
        marginTop: 40,
    },
    type: {
        height: 480,
        width: 340,
        alignItems: "center",
        // justifyContent: "center",
        // borderRadius: 15,
        // borderColor: "black",
        // borderWidth: 0.5,
    },
    input: {
        width: 340,
        height: 480,
        borderRadius: 15,
        marginTop: 20,
    },
    close: {
        width: 5,
        height: 5,
        // marginBottom: 25,
    },
});

const NewPostScreen = () => {
    return (
        <View style={[globalstyle.rows, styles.cont]}>
            <View style={styles.header}>
                <View style={styles.close}>
                    <CloseIcon />
                </View>
                <Text style={styles.title}>New Post</Text>
                <Text style={styles.NextT}>Next</Text>
            </View>
            <View style={styles.inner}>
                <View styles={styles.h1}>
                    <Text style={styles.text}>Story Title</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.date}>
                    <Text style={styles.text}>Story Title</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.type}>
                    <View style={styles.input}>
                        <Input text="start typing..." />
                    </View>
                    <View style={styles.button}>
                        <UploadMedia text="Add Pictures" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default NewPostScreen;