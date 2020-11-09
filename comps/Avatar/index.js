import React from "react";
import { View, StyleSheet, Image } from "react-native";

const MyAvatar = ({ dim, imgurl }) => {
  var dimstyle = { width: dim, height: dim };
  var imgstyle = { borderRadius: dim / 2 };
  // var dimstyle = null;
  // if(dim){
  //   dimstyle = {width:dim, height:dim};
  // }

  return (
    <View style={[styles.container, dimstyle]}>
      <Image
        style={[styles.image, imgstyle]}
        source={imgurl}
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
    borderRadius: 80
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

MyAvatar.defaultProps = {
  dimstyle: "{width:dim, height:dim}",
  imgurl: require("../../../Images/john.png")
};

export default MyAvatar;
