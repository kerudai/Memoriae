// import React from "react";
// import { View, StyleSheet, Image, Avatar } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     // display: "flex",
//     width: 25,
//     height: 25,
//     borderRadius: 80
//   },
//   image: {
//     width: "100%",
//     height: "100%"
//   },
// });


// const MyAvatar = ({ imgurl }) => {
  // var dimstyle = { width: dim, height: dim };
  // var imgstyle = { borderRadius: dim / 2 };
//   // var dimstyle = null;
//   // if(dim){
//   //   dimstyle = {width:dim, height:dim};
//   // }

//   return (
//     <View style={[styles.container]}>
//       {/* <Image
//         style={[styles.image, imgstyle]}
//         source={imgurl}
//         resizeMode={"cover"}
//       ></Image> */}
//       <Avatar style={[styles.image]} source={imgurl}> </Avatar>
//     </View>
//   );
// }

// MyAvatar.defaultProps = {
//   // dim: 50,
//   // dimstyle: {width:dim, height:dim},
//   imgurl: require("../../Images/john.png")
// };

// export default MyAvatar;

import React from 'react';
import {View, Image, StyleSheet} from "react-native";
import CenterView from '../../storybook/stories/CenterView';

const styles = StyleSheet.create({
  container: {
    // display: "flex",
  alignItems: "center",
  justifyContent: "center",
  },
  image: {

  },
});


const MyAvatar = ({ imgurl, dim, odim }) => {
  return (
    <View style={styles.container}  height={odim} width={odim} >
      <Image resizeMethod="auto" style={styles.image} source={imgurl} height={dim} width={dim} borderRadius={dim*10}></Image>
    </View>
  );
}

MyAvatar.defaultProps = {
  imgurl: require("../../Images/john.png"),
  dim: 40,
  odim: 30,
}



export default MyAvatar;
