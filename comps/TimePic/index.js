import React from "react";
import { View, StyleSheet, Image } from "react-native";

const MyTimePic = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../Images/johntime.png")}
        resizeMode={"contain"}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // minWidth: 50,
    // minHeight: 50
  },
  image: {
    width: 250,
    height: 250
  }
});
export default MyTimePic;
