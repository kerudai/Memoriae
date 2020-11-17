import React, { Component } from 'react';
import {useState} from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

const height = {height}

const styles = StyleSheet.create({
container: {
    borderColor: 'gray', 
    borderWidth: 1, padding: 10, 
    borderColor: "#1F1F1F", 
    minWidth: 200, 
    flex: 1,
    },
    text: {
        color:  "#1F1F1F", 
    },
    big: {
      flex: 1,
    },
});

const Input = ({ placeholder, textinput }) => {

  const [text, setText] = useState('');
      return (
      <View style={styles.big}>
        <TextInput style={[styles.container, styles.height]}
         placeholder={placeholder}
        onChangeText={text => setText(text)}
        defaultValue={text}>
        </TextInput>
        </View>
    );
  }
  
  Input.defaultProps = {
    placeholder: "Default Input",
  };

export default Input;
