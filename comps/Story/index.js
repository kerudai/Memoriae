import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyStory = ({ s_title, s_date, s_telling, s_like }) => {
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
      <Text style={styles.s_like} s_like={s_like}>
        {s_like}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  s_title: {
    fontSize: 20,
    fontWeight: 425,
    position: "relative",
    bottom: 10
  },
  s_date: {
    fontSize: 10,
    position: "relative",
    top: 0,
    left: 10,
    bottom: 20
  },
  s_telling: {
    position: "relative",
    top: 5,
    left: 25
  },
  s_like: {}
});

MyStory.defaultProps = {
  s_title: "Story Title",
  s_date: "Date of Story",
  s_telling: "Story",
  s_like: "Like"
};

export default MyStory;
