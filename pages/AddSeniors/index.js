import React, {useState, Component} from 'react';
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import Button1 from '../../comps/Button';
import CloseIcon from '../../comps/CloseIcon';
import PassInput from '../../comps/PassInput';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements';
import { createApi, createAuthApi } from '../../clientapi';

import {View, StyleSheet, Text, TextInput} from "react-native"
import { NativeRouter, Link, useHistory } from "react-router-native";

const styles = StyleSheet.create({
    cont: {
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    // main: {
    //     backgroundColor: "#F5F5F5",
    //     // flex: 1,
    // },
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
        marginTop: 150,
    },
    text: {
        color: "#1F1F1F",
        margin: 5,
       
    },
    button: {
        marginTop: 20,
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
    check: {
        width: 320,
    },
    containerinput: {
        borderColor: 'gray', 
        borderWidth: 1, padding: 10, 
        borderColor: "#1F1F1F", 
        minWidth: 200, 
        flex: 1,
        },
    textinput: {
            color:  "#1F1F1F", 
        },
});



const AddSenior = ({}) => {

    const [account_number, setAccount_number] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [birth_date, setBirth_date] = useState("");
    const [profile_picture, setProfile_picture] = useState("");
    const [bio, setBio] = useState("");
    const [likes, setLikes] = useState("");
    const [dislikes, setDislikes] = useState("");

    const onPress = async () => {
        console.log("Adding seniors", account_number, first_name, last_name, birth_date, profile_picture, bio, likes, dislikes);

        // return false;
        let resp
        const authApi = createAuthApi()

        // var seniors = await authApi.getConnectedSeniors();
        // console.log(seniors.data);
        // return false;;
    
        resp = await authApi.addSenior({
            account_number: parseInt(account_number),
            first_name: first_name,
            last_name: last_name,
            birth_date: "1986-11-21T20:15:24+00:00",
            profile_picture: profile_picture,
            bio: bio,
            likes: likes,
            dislikes: dislikes,
          })
        console.log(resp)
    }

    return (
        <View style={styles.main}>
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
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setAccount_number(text) 
                        }}
                        placeholder="Account Number"
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setFirstName(text) 
                        }}
                        placeholder="First Name"
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setLastName(text) 
                        }}
                        placeholder="Last Name"
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setBirth_date(text) 
                        }}
                        placeholder="Birth Date (YYYY-MM-DD)"
                        //birth_date format for YYYY-MM-DDThh:mm:ssTZD???
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setProfile_picture(text) 
                        }}
                        placeholder="Upload profile picture"
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setBio(text) 
                        }}
                        placeholder="Bio"
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setLikes(text) 
                        }}
                        placeholder="Likes"
                         />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                        onChangeText={(text)=>{setDislikes(text) 
                        }}
                        placeholder="Dislikes"
                         />
                    </View>
                    <View style={styles.button}>
                        <Button1 onPress={() => {onPress();
                        }} style={styles.button} text="Add Senior" />
                    </View>
                </View>
            </View>
        </View>
    );
};

AddSenior.defaultProps = {
    onPress: ()=> {}
}


export default AddSenior;