import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    },
        stretch: {
        minWidth: 10,
        minHeight: 10,
        resizeMode: 'stretch',
        },
});

const CloseIcon = ({text}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../Images/close.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

  

export default CloseIcon;
