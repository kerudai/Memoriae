import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import styled from "styled-components/native";

// // origianl highlight1
// const TextSelect = styled.TouchableHighlight`
//   background-color: ${(props) => (props.highlight ? "#2A3858" : "#EDEDED")};
//   /* color 2A3858 after tapping*/
// `;

const MySortWindow = () => {
  // original highlight2
  const [highlight, setHighlight] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {/* original highlight3 */}
        <View
          highlight={highlight}
          onPress={() => {
            setHighlight(true);
            alert("Date Added (oldest) tapped!");
          }}
        >
          <Text highlight={highlight} style={styles.text}>
            Date Added (oldest)
          </Text>
        </View>
        {/* <TextSelect style={styles.text}>Date Added (newest)</TextSelect>
        <TextSelect style={styles.text}>
          Chronological Added (oldest)
        </TextSelect>
        <TextSelect style={styles.text}>
          Chronological Added (newest)
        </TextSelect> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  menu: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    border: "1px solid #EDEDED",
    width: 280,
    height: 350,
    padding: 10,
    backgroundColor: "#EDEDED"
  }
  // text: {
  //   backgroundColor: ${(props) => props.highlight ? "#2A3858" : "#EDEDED"},
  // }
});

MySortWindow.defaultProps = {};

export default MySortWindow;
