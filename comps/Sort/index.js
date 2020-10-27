import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const MySort = () => {
  const [highlight, setHighlight] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text>Sort</Text>
        <View
          expand={expand}
          onMouseEnter={() => {
            setExpand(true);
          }}
          onMouseLeave={() => {
            setExpand(false);
          }}
          style={styles.icon}
        ></View>
      </View>
      <View style={styles.menu}>
        <Text
          highlight={highlight}
          onMouseEnter={() => {
            setHighlight(true);
          }}
          onMouseLeave={() => {
            setHighlight(false);
          }}
          style={styles.text}
        >
          Date Added (oldest)
        </Text>
        <Text style={styles.text}>Date Added (newest)</Text>
        <Text style={styles.text}>Chronological Added (oldest)</Text>
        <Text style={styles.text}>Chronological Added (newest)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    minWidth: "50%",
    minHeight: "50%"
  },
  button: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    // position: "absolute",
    left: "100px"
  },
  icon: {
    backgroundImage: "url(/expandrop.png)",
    minWidth: "100%",
    minHeight: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    cursor: "pointer"
  },
  menu: {
    display: "inline-flex",
    border: "1px solid #EDEDED",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "#EDEDED"
  },
  text: {
    marginBottom: "10px",
    background: "${props=>props.highlight ? red  :  }",
    color: "${props=>props.highlight ? white   :  }"
  }
});

MySort.defaultProps = {
  highlight: ""
};
export default MySort;
