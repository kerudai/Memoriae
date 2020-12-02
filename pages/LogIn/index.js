import React, { useState, Component } from 'react';
import globalstyle from "../globalstyle";
import Input from '../../comps/Input';
import SmallLogo from '../../comps/SmallLogo';
import Button1 from '../../comps/Button';
import CloseIcon from '../../comps/CloseIcon';
import PassInput from '../../comps/PassInput';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements';
import { createApi, createAuthApi } from '../../clientapi';

import { View, StyleSheet, Text, TextInput } from "react-native"
import { NativeRouter, Link, useHistory } from "react-router-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        marginTop: 250,
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
    textW: {
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
        color: "#1F1F1F",
    },
});

const LogInScreen = ({ }) => {


    // const Insert = props => {
    //     const [enteredName, setEnteredName] = useState('');


    const history = useHistory();
    const [checkedStaff, toggleCheckedStaff] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const role = checkedStaff ? 'staff' : 'family_member';
    // const [seniors, setSeniors] = useState([]);

    const onPress = async () => {
        console.log("Logging in");

        let resp
        const api = createApi()
        resp = await api.login({
            username: username,
            password: password,
            role: checkedStaff ? 'staff' : 'family_member',
        })
        console.log(resp.data)

        const { token } = resp.data
        const authApi = createAuthApi(token)
        resp = await authApi.getUserProfile()
        console.log(resp.data)
        //do async stuff
        try {
            if(token){
                await AsyncStorage.setItem("@token", token);
            }
        } catch (e){
            console.log("error", e.message);
        }

        //instead of <Link> route after completing script like backend communication
        if (token){history.push("/staffhome")}else{alert("log in failed")}

        // const GetAllConnectedSeniors = async ()=>{
        // const authApi = createAuthApi()
        // var senior = await authApi.getConnectedSeniors()
        // var senior = {
        // data:arr
        // }
        // console.log("Get seniors!(staff_home)",senior.data);
        // setSeniors([...senior.data]); 
        // }
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
                            onChangeText={(text) => {
                                setUsername(text)
                            }}
                            placeholder="username"
                        />
                    </View>
                    <View style={[styles.input, styles.biginput]}>
                        <TextInput style={styles.containerinput}
                            onChangeText={(text) => {
                                setPassword(text)
                            }}
                            secureTextEntry={true}
                            placeholder="Password"
                        />
                    </View>
                    <View style={styles.check}>
                        <CheckBox
                            title="Staff ?"
                            uncheckedColor="#F1F1F1"
                            checkedColor="#2A3858"
                            checked={checkedStaff}
                            onPress={() => toggleCheckedStaff(!checkedStaff)}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button1 onPress={() => {
                            onPress(username,password,role)
                            // {GetAllConnectedSeniors}
                            
                        } }style={styles.button} text="Log In" />
                    </View>
                    <View style={styles.textW}>
                        <Link to="/forgotpassword">
                            <Text style={styles.text}>Forgot your password?</Text>
                        </Link>
                        <View style={styles.textLine}>
                            <Text style={styles.text}>don't have an acccount?</Text>
                            <Link to="/register">
                                <Text style={styles.textBold}> Register</Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

LogInScreen.defaultProps = {
    onPress: () => { }
}


export default LogInScreen;