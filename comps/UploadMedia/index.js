import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#2A3858',
    minHeight:60,
    width:414,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    color:'#FFFFFF',
    fontSize:16,
  },
  img: {
    fontSize:40,
    maxHeight:34,
    maxWidth :42,
  }
});

const UploadMedia = ({text}) => {
  return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../Images/addmedia.png')} />
        <Text style={styles.text}>{text}</Text>
      </View>
  );
}

UploadMedia.defaultProps = {
  text: 'Upload Media'
};

export default UploadMedia;