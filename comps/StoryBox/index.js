import React from "react";
import { View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFFFFF',
    height:'auto' ,
    padding:10,
    width:385, 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  }
});

const StoryBox = () => {
  return (
      <View style={styles.container}>
        
      </View>
  );
}

StoryBox.defaultProps = {

};

export default StoryBox;