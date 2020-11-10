// import React from "react";
// import globalstyle from "../globalstyle";
// import Avatar from "../../comps/Avatar";
// import StoryBox from "../../comps/StoryBox";
// import Story from "../../comps/Story";
// import SortButton from "../../comps/SortButton";
// import SortWindow from "../../comps/SortWindow";
// import Header from "../../comps/Header";
// import TimePic from "../../comps/TimePic";
// import BackNav from "../../comps/BackNav";
// import { View, StyleSheet, Text } from "react-native";
// import Input from "../../comps/Input";

// const styles = StyleSheet.create({
//   homecont: {
//     backgroundColor: "#E5E5E5",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avaflex: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     marginBottom: 50
//   }
// });

// const Staff_home = () => {
//   return (
    // <View style={[globalstyle.rows, styles.homecont]}>
    //   <Header />
    //   <StoryBox>
    //     <Input text="" />
    //     <Text>
    //       Welcome back, Amy. Here is a glance at your patients for today.
    //     </Text>
    //   </StoryBox>
    //   <View>
    //     <hr />
    //   </View>
    //   <StoryBox>
    //     <View style={[styles.avaflex]}>
    //       <Avatar dim={130} imgurl={require("../../Images/john.png")} />
    //       <Story
    //         s_title="John Moon"
    //         s_date=""
    //         s_telling=""
    //         s_like="Recent story: John fought in WW..."
    //       />
    //     </View>
    //     <View style={[styles.avaflex]}>
    //       <Avatar dim={130} imgurl={require("../../Images/rita.png")} />
    //       <Story
    //         s_title="Rita Baker"
    //         s_date=""
    //         s_telling=""
    //         s_like="Profile update: Rita’s favourite de..."
    //       />
    //     </View>
    //     <View style={[styles.avaflex]}>
    //       <Avatar dim={130} imgurl={require("../../Images/tony.png")} />
    //       <Story
    //         s_title="Tony Raj"
    //         s_date=""
    //         s_telling=""
    //         s_like="Recent story: In his earlier years..."
    //       />
    //     </View>
    //     <View style={[styles.avaflex]}>
    //       <Avatar dim={130} imgurl={require("../../Images/pascal.png")} />
    //       <Story
    //         s_title="Pascal Frau"
    //         s_date=""
    //         s_telling=""
    //         s_like="Profile update: Pascal dislikes lis..."
    //       />
    //     </View>
    //   </StoryBox>
    // </View>
//   )
// }

// export default Staff_home;

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import StoryBox from '../../comps/StoryBox';
import HrDivider from '../../comps/Divider';
import Avatar from '../../comps/Avatar';
import Story from '../../comps/Story';
import TextStatus from '../../comps/TextStatus';

import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width*0.85

const styles = StyleSheet.create({
  mcont: {
    alignItems: "center",
  },
  
  input: {
    width: deviceWidth,
    height: 50,
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
  return (
    <View style={styles.mcont}>
        <Header />
          <StoryBox>
          <View style={styles.input}>
            <Input placeholder="Find a patient..." />
            </View>
          </StoryBox>          
          <View style={styles.scont}>
          <HrDivider />
            <StoryBox>
              <View style={styles.tcont}>
                <Avatar dim={75} />
                <View style={styles.fcont}>
                <TextStatus Name="John Moon" Update="Recent story: in his nearlier years John .." />
                </View>
              </View>
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={require("../../Images/rita.png")} />
                <View style={styles.fcont}>
                <TextStatus  Name="Rita Baker" Update="Recent story: in her nearlier years Rita .."/>
                </View>
              </View>
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={require("../../Images/tony.png")} />
                <View style={styles.fcont}>
                    <TextStatus  Name="Tony Raj" Update="Recent story: in his nearlier years Tony .." />
                </View>
              </View>
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={require("../../Images/pascal.png")} />
                <View style={styles.fcont}>
                    <TextStatus  Name="Pascal Frau" Update="Recent story: in his nearlier years Pascal .." />
                </View>
              </View>
            </StoryBox>
          </View>
    </View>
  )

  
}

export default Staff_home;