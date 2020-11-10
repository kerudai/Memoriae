import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Avatar from "../Avatar"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginLeft:25,
    marginRight:25,
    marginBottom:15,
    alignItems:"center"
  },
  stretch: {
    minWidth: 15,
    minHeight: 20,
    resizeMode: "stretch",
    position: "relative",
    transform: "scaleX(-1)",
    
  },
  text: {
    color: "#000000",
    fontSize: 24,
    
  },
box: {
  flexDirection: "row",
  top:20
},
text2: {
  fontSize:12
},
txt: {
left:-30
}
});

const Profile = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Avatar dim= {100}/>
        <View style={styles.txt}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text2}>View Profile</Text>
        </View>
      </View>
      
      <View style={styles.arrow}>
        <Image
          style={styles.stretch}
          source={require("../../Images/backnav.png")}
        />
      </View>
    </View>
  );
};

Profile.defaultProps = {
  text: "Default Name"
};

export default Profile;