import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D57FFE",
    margin: 5,
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#FFF"
  },
  text2: {
    fontSize: 21,
    marginLeft: 5
  }
});

const Button = ({ text }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert("Clicked!");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text2}>More words</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  text: "Press Me"
};

export default Button;
