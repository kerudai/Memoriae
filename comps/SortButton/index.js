import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 5
  }
});

const MySortButton = () => {
  return (
    <View style={styles.container}>
      <Text>Sort</Text>
      <Image
        style={styles.image}
        source={require("../../Images/dropexpand.png")}
        resizeMode={"contain"}
      ></Image>
    </View>
  );
};



MySortButton.defaultProps = {};

export default MySortButton;
