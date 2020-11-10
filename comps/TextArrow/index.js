import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginLeft:25,
    marginRight:25,
    marginBottom:15 
  },
  stretch: {
    minWidth: 15,
    minHeight: 20,
    resizeMode: "stretch",
    position: "relative",
    transform: "scaleX(-1)",
    
  },
  text: {
    color: "#000000",
    fontSize: 21,
    
  }
});

const TextArrow = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Image
        style={styles.stretch}
        source={require("../../Images/backnav.png")}
      />
    </View>
  );
};

TextArrow.defaultProps = {
  text: "Default Name"
};

export default TextArrow;