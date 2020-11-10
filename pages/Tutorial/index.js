import React from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";
import TutorialText from "../../comps/TutorialText"
import { View, StyleSheet, Text, Image } from "react-native";
import CenterView from "../../storybook/stories/CenterView";
import SmallButton from "../../comps/SmallButton";

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "white",
  },
  stretch: {
    height:500,
    width:"auto",
    resizeMode: "contain"
  },
  box: {
  marginTop: 70
  },
  bottom: {
    position:"fixed",
    bottom: 0,
    width:"100%"
  },
});

const Tutorial = () => {
  return (
    <View style={[globalstyle.rows, styles.cont]}>
      <BackMiddleNav text="Help" />
      <View style={styles.box}>
        <TutorialText text='header' desc='description' />
        <Image
          style={styles.stretch}
          source={require('../../Images/tut.png')}
        />
      </View>
      <View style={styles.bottom}>
        <SmallButton text='Back' text1='Next'/>
      </View>
    </View>
  );
};

export default Tutorial;