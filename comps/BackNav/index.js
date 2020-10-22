import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    },
        stretch: {
        minWidth: 15,
        minHeight: 20,
        resizeMode: 'stretch',
        },
        text: {
            color:  "#1F1F1F", 
            marginLeft: 20,
        },
});

const BackNav = ({text}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../Images/backnav.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

  
BackNav.defaultProps = {
    text: "Default Name"
}

export default BackNav;
