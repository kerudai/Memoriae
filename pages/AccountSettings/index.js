import React from "react";
import globalstyle from "../globalstyle";
import BackMiddleNav from "../../comps/BackMiddleNav";

import { View, StyleSheet, Text } from "react-native";
import CenterView from "../../storybook/stories/CenterView";

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  text: {
    color: "#1F1F1F",
    fontSize: 20,
    marginLeft:30,
    marginTop:10,
    
  },
  textbox: {
    marginTop:75,
  },
  continner: {
    backgroundColor:"#FFFFFF",
    margin: 20,
    borderRadius: 10,
    height: '95vh',
    
    
  }
});

const AccountSettings = () => {
  return (
    <View style={[globalstyle.rows, styles.cont]}>
      <View style={styles.continner}>
        <BackMiddleNav text="Account" />
        <View style={styles.textbox}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>Phone</Text>
        </View> 
      </View>
    </View>
  );
};

export default AccountSettings;