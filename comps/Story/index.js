import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyStory = ({ s_title, s_date, s_telling }) => {
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
    // position: "relative"
  },
  s_title: {
    fontWeight: "bold",
    width: 100
  },
  s_date: {
    fontSize: ".5rem"
  },
  s_telling: {
    width: 50,
    textAlign: "right"
  }
});

MyStory.defaultProps = {
  s_title: "Story Title",
  s_date: "Date of Story",
  s_telling: "Story"
};

export default MyStory;
