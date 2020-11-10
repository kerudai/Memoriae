import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    borderRadius: 80,
  },
  image: {
    width: "100%",
    height: "100%"
  },
});


const MyAvatar = ({ imgurl, dim }) => {
    // var dimstyle = { width: dim, height: dim };
    // var imgstyle = { borderRadius: dim / 2 };
  // var dimstyle = null;
  // if(dim){
  //   dimstyle = {width:dim, height:dim};
  // }

  return (
    // <View style={[styles.container, dimstyle]}>
    <View style={styles.container} width={dim} height={dim}>
      <Image
        // style={[styles.image, imgstyle]}
        style={styles.image}
        borderRadius={dim/2}
        source={imgurl}
        resizeMode={"cover"}
      ></Image>
    </View>
  );
}

MyAvatar.defaultProps = {
  imgurl: require("../../Images/john.png"),
  dim: 90,
};

export default MyAvatar;

