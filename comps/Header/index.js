import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Dimensions} from 'react-native';
import { NativeRouter, Link, useHistory } from "react-router-native";

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
    left:10,
    position:'absolute',
    height:24,
    width:22,
    backgroundColor:'#2A3858',
    // border: 1
  }
});

const Header = () => {
  return (
      <View underlayColor="#ffffff00" style={styles.container}>
        <TouchableOpacity underlayColor="#ffffff00" style={styles.img}>
          <Link to="/settings">
           <Image source={require('../../Images/profileicon.png')} />
           </Link>
        </TouchableOpacity>
        <Text style={styles.text}>Memoriae</Text>
      </View>
  );
}

Header.defaultProps = {
  
};

export default Header;