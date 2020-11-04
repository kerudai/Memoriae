import React from "react";
import { View, StyleSheet, Image } from "react-native";

const MyAvatar = ({ dim }) => {
  var dimstyle = { width: dim, height: dim };
  // var dimstyle = null;
  // if(dim){
  //   dimstyle = {width:dim, height:dim};
  // }

  return (
    <View style={[styles.container, dimstyle]}>
      <Image
        style={styles.image}
        source={require("../../../Images/john.png")}
        resizeMode={"cover"}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    width: 25,
    height: 25,
    borderRadius: 50
  },
  image: {
    width: "50%",
    height: "50%",
    borderRadius: 50
  }
});

MyAvatar.defaultProps = {
  dimstyle: "{width:dim, height:dim}"
};

export default MyAvatar;
