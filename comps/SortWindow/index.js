import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const TextSelect = styled.TouchableOpacity``;

const MySortWindow = () => {
  return (
    <View style={styles.container}>
      <TextSelect
        onPress={() => {
          alert("Date Added (oldest) tapped!");
        }}
      >
        <Text style={styles.text}>Date Added (oldest)</Text>
      </TextSelect>
      <TextSelect
        onPress={() => {
          alert("Date Added (newest) tapped!");
        }}
      >
        <Text style={styles.text}>Date Added (newest)</Text>
      </TextSelect>
      <TextSelect
        onPress={() => {
          alert("Chronological (oldest) tapped!");
        }}
      >
        <Text style={styles.text}>Chronological (oldest)</Text>
      </TextSelect>
      <TextSelect
        onPress={() => {
          alert("Chronological (newest) tapped!");
        }}
      >
        <Text style={styles.text}>Chronological (newest)</Text>
      </TextSelect>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    border: "1px solid #EDEDED",
    padding: 25,
    width: "100vw",
    backgroundColor: "#EDEDED"
  },
  text: {
    padding: 40
  }
});

MySortWindow.defaultProps = {};

export default MySortWindow;
