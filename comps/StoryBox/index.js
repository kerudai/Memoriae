import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Dimensions } from 'react-native';


// const width_proportion = '95%';
const deviceWidth = Dimensions.get('window').width*0.95;
const height_proportion = 'auto';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: height_proportion,
    padding: 20,
    width: deviceWidth,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

const StoryBox = ({ children }) => {
  return (
  <View style={styles.container}>{children}</View>
  );
}

StoryBox.defaultProps = {};

export default StoryBox;
