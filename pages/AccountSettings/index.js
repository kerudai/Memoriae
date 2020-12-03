import React from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";
import BackNav from '../../comps/BackNav';
import Button from '../../comps/Button';
import Input from '../../comps/Input';
import { NativeRouter, Route, Link, useHistory } from "react-router-native";

import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import CenterView from "../../storybook/stories/CenterView";

import {Dimensions} from 'react-native';
import Button1 from "../../comps/Button";

const deviceHeight = Dimensions.get('window').height*0.95;

const styles = StyleSheet.create({
  textbox:{
    margin: 40,
    marginTop: 100,
    height: 190,
    // borderColor: "#DAD",
    // borderWidth: 1,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 20,
    padding: 5,
  },
  scont: {
    height: 80,
  },
  button: {
    marginTop: 300,
  },
  
});

const AccountSettings = () => {

  const history = useHistory();

  const HandleBack = async()=>{
      //do async stuff

      //instead of <Link> route after completing script like backend communication
      history.push("/settings")
  }

  return (
    <View  style={styles.main} >
      <View>
        <BackMiddleNav onPress={HandleBack} text="Account Reset" />
      </View>
      <View style={styles.textbox}>
        <View style={styles.scont}>
            <Text style={styles.text} >Username: familykeju</Text>
            <Input placeholder="Update username" />
        </View>
        <View style={styles.scont}>
           <Text style={styles.text}>Reset Password:</Text>
           <Input placeholder="Type old password" />
        </View>
        <View style={styles.scont}>
           <Text style={styles.text}>New Password:</Text>
           <Input placeholder="Type new password" />
        </View>
      </View>
      <View style={styles.button} >
         <Button1 onPress={HandleBack} text="Update"/>
      </View>
    </View>
    
  );
};

export default AccountSettings;