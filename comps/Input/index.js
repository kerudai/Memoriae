import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
container: {
    borderColor: 'gray', 
    borderWidth: 1, padding: 10, 
    borderColor: "#1F1F1F", 
    minWidth: 200, 
    },
    text: {
        color:  "#1F1F1F", 
    },
});

const Input = ({ text }) => {
    return (
        <TextInput style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </TextInput>
    );
  }
  
  Input.defaultProps = {
    text: "Default Input"
  };

export default Input;
