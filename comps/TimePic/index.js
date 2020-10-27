import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyTimePic = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundImage: "url(/johntime.png)",
    minWidth: "100%",
    minHeight: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
  }
});
export default MyTimePic;
