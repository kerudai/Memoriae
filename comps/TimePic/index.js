import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const MyTimePic = ({ caption, imgurl }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgurl} resizeMode={"contain"} />
      <View style={styles.text}>
        <Text>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: 25,
    width: 500,
    height: 250
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    width: "70%"
  }
});

MyTimePic.defaultProps = {
  caption: "Default",
  imgurl: require("../../Images/johnhawaii.png")
};

export default MyTimePic;
