import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, navigate } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#F5F5F5"
  },
  loginScreenButton:{
    backgroundColor:'#2A3858',
    borderRadius:2,
    padding: 10,
    minWidth: 200,
    minHeight: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Button1 = ({ text }) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity
            style={styles.loginScreenButton}
             underlayColor='#fff'>
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
      </View>
  );
}

Button1.defaultProps = {
  text: "Default button"
};

export default Button1;
