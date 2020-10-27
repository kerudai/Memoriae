import React from "react";
import { View, StyleSheet } from "react-native";

const MyAvatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} src={"url(/johntime.png"}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    backgroundImage: "url(/john.png)",
    minWidth: "100%",
    minHeight: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  },
  image: {
    minWidth: "100%",
    minHeight: "130%"
  }
});
export default MyAvatar;
