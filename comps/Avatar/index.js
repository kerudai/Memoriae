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
        source={{uri: imgurl}}
        resizeMode={"cover"}
      ></Image>
    </View>
  );
}

MyAvatar.defaultProps = {
  imgurl: "https://images.unsplash.com/photo-1590074251929-76f7c465a3bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  dim: 90,
};

export default MyAvatar;

