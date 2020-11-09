import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "auto",
    padding: 20,
    width: "95%",
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});

const StoryBox = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

StoryBox.defaultProps = {};

export default StoryBox;
