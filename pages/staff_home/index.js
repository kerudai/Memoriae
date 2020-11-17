import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import StoryBox from '../../comps/StoryBox';
import HrDivider from '../../comps/Divider';
import Avatar from '../../comps/Avatar';
import Story from '../../comps/Story';
import TextStatus from '../../comps/TextStatus';
import TextGreeting from '../../comps/TextGreeting';
import { createApi, createAuthApi } from '../../clientapi';
import Button1 from '../../comps/Button';

import {Dimensions} from 'react-native';

import { NativeRouter, Link, useHistory } from "react-router-native";

const deviceWidth = Dimensions.get('window').width*0.85

const styles = StyleSheet.create({
  mcont: {
    alignItems: "center",
  },
  
  input: {
    width: deviceWidth,
    justifyContent: "space-between",
    height: 100,
    margin: 10,
  },
  scont: {
  },
  tcont: {
    flexDirection: "row",
    width: deviceWidth,
    alignItems: "center",
    margin: 10
  },
  fcont: {
    marginLeft: 15,
    padding: 5,
  }
})




const Staff_home = () => {

  const [username, setName] = useState(null);


  const HandleProfile = async () => {
    console.log("clicked")
  
    let resp
    const api = createApi()
    resp = await api.profile()
    console.log(resp.data);
    setName(resp.username);
  
    const { token } = resp.data
    const authApi = createAuthApi(token)
    resp = await authApi.getUserProfile()
    console.log(resp.data)
    // do async stuff
  
    //instead of <Link> route after completing script like backend communication
  }
  

  return (
    <View style={styles.mcont}>
        <Header/>
          <StoryBox> 
          <Button1 onPress={HandleProfile}  />
          <View style={styles.input}>
            <Input style={styles.input1} placeholder="Find a patient..." />
            <TextGreeting name={username} />
            </View>
          </StoryBox>          
          <View style={styles.scont}>
          <HrDivider />
            <StoryBox>
            <Link to="/staffprofile">
              <View style={styles.tcont}>
                <Avatar dim={75} />
                <View style={styles.fcont}>
                <TextStatus Name="John Moon" Update="Recent story: in his nearlier years John .." />
                </View>
              </View>
              </ Link>
              <Link to="/staffprofile">
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={require("../../Images/rita.png")} />
                <View style={styles.fcont}>
                <TextStatus  Name="Rita Baker" Update="Recent story: in her nearlier years Rita .."/>
                </View>
              </View>
              </ Link>
              <Link to="/staffprofile">
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={require("../../Images/tony.png")} />
                <View style={styles.fcont}>
                    <TextStatus  Name="Tony Raj" Update="Recent story: in his nearlier years Tony .." />
                </View>
              </View>
              </Link>
              <Link to="/staffprofile">
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={require("../../Images/pascal.png")} />
                <View style={styles.fcont}>
                    <TextStatus  Name="Pascal Frau" Update="Recent story: in his nearlier years Pascal .." />
                </View>
              </View>
              </Link>
            </StoryBox>
          </View>
    </View>
  )

  
}

export default Staff_home;