import React from "react";
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import UploadMedia from '../../comps/UploadMedia';
import CloseIcon from '../../comps/CloseIcon';
import StoryBox from '../../comps/StoryBox';

import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width*1.3;
const deviceWidthF = Dimensions.get('window').width;
const deviceWidthH = Dimensions.get('window').width*0.85;


import { NativeRouter, Link, useHistory } from "react-router-native";
import {View, StyleSheet, Text} from "react-native"

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
        // flex: 1,
        margin: 15,
        borderRadius: 5,
        // justifyContent: "center"
    },
    main: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    header: {
       flexDirection: "row",
       justifyContent: "space-evenly",
       width: deviceWidth,
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
        zIndex: 1,
    },
    date: {
        marginTop: 40,
    },
    type: {
        height: 480,
        width: deviceWidth,
        alignItems: "center",
        zIndex: 5,
        // justifyContent: "center",
        // borderRadius: 15,
        // borderColor: "black",
        // borderWidth: 0.5,
    },
    input: {
        width: deviceWidthH,
        height: 490,
        borderRadius: 15,
        marginTop: 40,
        zIndex: 10,
    },
    close: {
        alignSelf: 'auto',
        backgroundColor: '#FAD',
        // marginBottom: 25,r
    },
});

const NewPostScreen = () => {


    const history = useHistory();

    const HandleBack = async()=>{
        //do async stuff

        //instead of <Link> route after completing script like backend communication
        history.push("/familyprofile")
    }

    return (
        <View style={styles.main}>
            <View style={[globalstyle.rows, styles.cont]}>
                <View style={styles.header}>
                    <View style={styles.close}>
                    <CloseIcon onPress={HandleBack} />
                    </View>
                    <Text style={styles.title}>New Post</Text>
                    <Text style={styles.NextT}>Next</Text>
                </View>
                <View style={styles.inner}>
                    <View styles={styles.h1}>
                        <Text style={styles.text}>Story Title</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.text}>Story Title</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.type}>
                        <View style={styles.input}>
                            <Input placeholder="start typing..." />
                        </View>
                        <View style={styles.button} >
                            <UploadMedia text="Add Pictures" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default NewPostScreen;

// import React from 'react';
// import Input from '../../comps/Input';
// import InputTitle from '../../comps/InputTitle';
// import UploadMedia from '../../comps/UploadMedia';
// import {View, StyleSheet, Text} from "react-native";


// import {Dimensions} from 'react-native';

// const deviceHeight = Dimensions.get('window').height*0.80;
// const deviceWidth = Dimensions.get('window').width*0.80;

// const styles = StyleSheet.create({
//     container: {
//     },
//     mediabutton: {
//         position: 'relative',
//         // top: deviceHeight,
//         width: deviceWidth,
//        },
//     inputBox: {
//         alignItems: 'center',
//         height: deviceHeight,
//         width: deviceWidth,
//         justifyContent: "space-between",
//        },
//     storyinput: {
//         height: 400,
//     },
//     });



// const NewPostScreen = () => {
//     return (
//         <View style={styles.container}>
//             <InputTitle placeholder="Story Title" />
//             <InputTitle placeholder="Date of Story"/>
//             <View style={styles.inputBox}>
//                 <View style={styles.storyinput}>
//                     <InputTitle />
//                 </View>
//                 <View style={styles.mediabutton}>
//                     <UploadMedia />
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default NewPostScreen;