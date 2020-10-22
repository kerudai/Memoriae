import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A3858",
    margin: 5,
    borderRadius: 2,
    padding: 15,
    minWidth: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#F5F5F5"
  },
  text2: {
    fontSize: 21,
    marginLeft: 5
  }
});

const Button = ({ text }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
  );
}

Button.defaultProps = {
  text: "Default button"
};

export default Button;
