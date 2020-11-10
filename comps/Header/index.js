import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#2A3858',
    minHeight:80,
    width:deviceWidth,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
  },
  text: {
    color:'#FFFFFF',
    margin:'auto',
    fontSize:32,
  },
  img: {
    left:20,
    position:'absolute',
    height:24,
    width:22,
    // border: 1
  }
});

const Header = () => {
  return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../Images/profileicon.png')} />
        <Text style={styles.text}>Memoriae</Text>
        
      </View>
  );
}

Header.defaultProps = {
  
};

export default Header;