import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width*0.76;

const MyTimePic = ({ caption, imgurl, date }) => {
  return (
    <View style={styles.container}>
       <View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
      <Image style={styles.image} source={imgurl} resizeMode={"contain"} />
      <View style={styles.text}>
        <Text>{caption}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 200,
    width: deviceWidth,
    marginBottom: 90
  },
  image: {
    width: "100%",
    height: "85%",
  },
  text: {
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    marginBottom: 10,
  }
});

MyTimePic.defaultProps = {
  caption: "Default",
  imgurl: require("../../Images/johnhawaii.png"),
  date: "nov 24, 2020"
};

export default MyTimePic;
