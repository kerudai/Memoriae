import React, { useState } from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import UploadMedia from '../../comps/UploadMedia';
import CloseIcon from '../../comps/CloseIcon';
import StoryBox from '../../comps/StoryBox';
import TextName from '../../comps/TextName';
import InputTitle from '../../comps/InputTitle';
import HrDivider from '../../comps/Divider';
import { createApi, createAuthApi } from '../../clientapi';

import { Dimensions } from 'react-native';

const deviceWidthButton = Dimensions.get('window').width * 0.85;
const deviceWidthF = Dimensions.get('window').width;
const deviceWidthH = Dimensions.get('window').width * 0.90;
const deviceHeightP = Dimensions.get('window').height * 0.70;
const deviceHeightT = Dimensions.get('window').height * 0.10;

import { PermissionsAndroid, Platform } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";


import { NativeRouter, Link, useHistory } from "react-router-native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

const styles = StyleSheet.create({
    upperBox: {
        flexDirection: 'row',
        width: deviceWidthH,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#FAD',
        margin: 5,
    },
    mcont: {
        alignItems: 'center',
    },
    textN: {
        color: "#2A3858",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10,
    },
    input: {
        width: deviceWidthH,
        height: deviceHeightP,
        borderStyle: 'solid',
        borderColor: '#1F1F1F',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 35,
    },
    title: {
        height: deviceHeightT,
        alignItems: 'flex-start',
        width: deviceWidthH,
    },
    divider: {
        width: deviceWidthH,
    },
    media: {
        width: deviceWidthButton,
        position: 'absolute',
        bottom: 10
    }
})

const NewPostScreen = () => {
    const [senior_id, setSenior_id] = useState("");
    //where does senior_id go?
    const [mtitle, setTitle] = useState("");
    const [mdate, setDate] = useState("");
    const [mcontent, setContent] = useState("");
    //Things to set
    //states
    //onchangetext
    //function
    //do async call 

    const onPress = async () => {
        console.log("You are about to post!", senior_id, mtitle, mdate, mcontent);

        let resp
        const api = createAuthApi()
        resp = await api.addEntry({
            role: "family_member",
            senior_id: 560,
            title: mtitle,
            date: mdate,
            content: mcontent
        })
        console.log("new entry",resp, senior_id)
        
    }

    return (
        <View style={styles.mcont}>
            <View style={styles.upperBox}>
                <Link to="/familyprofile">
                    <CloseIcon />
                </Link>
                <TextName text="New post" />
                <TouchableOpacity onPress={onPress}>

                    <Text style={styles.textN}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <InputTitle placeholder="Story title"
                    onChangeText={(text) => {
                        setTitle(text)
                    }}
                />
                <View style={styles.divider}>
                    <HrDivider />
                </View>
                <InputTitle placeholder="Story Date"
                    onChangeText={(text) => {
                        setDate(text)
                    }}
                />
                <View style={styles.divider}>
                    <HrDivider />
                </View>
            </View>
            <View>
                <View style={styles.input} >
                    <InputTitle placeholder="type your story"
                        onChangeText={(text) => {
                            setContent(text)
                        }}
                    />
                </View>
            </View>
            <View style={styles.media}>
                <UploadMedia />
            </View>
        </View>
    );
};

NewPostScreen.defaultProps = {
    onPress: () => { }
}

export default NewPostScreen;

