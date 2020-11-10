import React from "react";
import { View, Text, StyleSheet } from "react-native";

import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width*0.95;

const MyStory = ({ s_title, s_date, s_telling}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.s_title} s_title={s_title}>
        {s_title}
      </Text>
      <Text style={styles.s_date} s_date={s_date}>
        {s_date}
      </Text>
      <Text style={styles.s_telling} s_telling={s_telling}>
        {s_telling}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 10,
    width: deviceWidth,
  },
  s_title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    // position: "relative",
    // bottom: 10
  },
  s_date: {
    fontSize: 10,
    marginBottom: 5,
    // position: "relative",
    // top: 0,
    // left: 10,
    // bottom: 20
  },
  s_telling: {
    // position: "relative",
    // top: 5,
    // left: 25,
    padding: 10,
  },
});

MyStory.defaultProps = {
  s_title: "Story Title",
  s_date: "story date",
  s_telling: "story content",
};

export default MyStory;
