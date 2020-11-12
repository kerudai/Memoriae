import { StyleSheet } from "react-native";

import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  rows: {
   height: deviceHeight,
  },
});
