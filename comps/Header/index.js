import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#2A3858',
    minHeight:80,
    width:414,
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
    fontSize:60,
    left:10,
    position:'absolute',
    maxHeight:24,
    maxWidth:22,
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