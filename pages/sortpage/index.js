// import React from "react";
// import globalstyle from "../globalstyle";
// import Avatar from "../../comps/Avatar";
// import StoryBox from "../../comps/StoryBox";
// import Story from "../../comps/Story";
// import SortButton from "../../comps/SortButton";
// import SortWindow from "../../comps/SortWindow";
// import Header from "../../comps/Header";
// import TimePic from "../../comps/TimePic";
// import BackNav from "../../comps/BackNav";
// import { View, StyleSheet, Text } from "react-native";

// const styles = StyleSheet.create({
//   homecont: {
//     flexDirection: "column",
//     backgroundColor: "#E5E5E5",
//     alignItems: "center"
//   },
//   john: {
//     marginTop: 15,
//     fontSize: 20,
//     fontWeight: 425
//   },
//   homeblur: {
//     backgroundColor: "rgba(239,237,237,0.5)",
//     width: "100%",
//     height: "100%",
//     zIndex: 1,
//     position: "absolute",
//     left: 0,
//     top: 0
//   },
//   sortbox: {
//     zIndex: 2,
//     position: "absolute",
//     top: 900
//   }
// });

// const Sortpage = () => {
//   return (
//     <View style={[globalstyle.rows, styles.homecont]}>
//       <View style={[styles.homeblur]}></View>
//       <View style={[styles.sortbox]}>
//         <SortWindow />
//       </View>
//       <Header />
//       <StoryBox>
//         <BackNav text="John Moon" />
//         <Avatar dim={190} />
//         <Text style={[styles.john]}>John Moon</Text>
//       </StoryBox>
//       <View>
//         <hr />
//       </View>
//       <StoryBox>
//         <View style={{ flexDirection: "row" }}>
//           <View style={({ flexDirection: "column" }, { marginRight: 50 })}>
//             <Story s_title="Likes" s_date="" s_telling="" s_like="" />
//             <Story
//               s_title=""
//               s_date=""
//               s_telling=""
//               s_like="Dessert: brownies"
//             />
//             <Story s_title="" s_date="" s_telling="" s_like="Music: Reggae" />
//             <Story s_title="" s_date="" s_telling="" s_like="Season: Fall" />
//             <Story s_title="" s_date="" s_telling="" s_like="Color: Orange" />
//             <Story s_title="" s_date="" s_telling="" s_like="Animal: Parrot" />
//           </View>
//           <View style={{ flexDirection: "column" }}>
//             <Story s_title="Dislikes" s_date="" s_telling="" s_like="" />
//             <Story
//               s_title=""
//               s_date=""
//               s_telling=""
//               s_like="Food: Mushrooms, Cinnamon"
//             />
//             <Story s_title="" s_date="" s_telling="" s_like="Music: Jazz" />
//             <Story s_title="" s_date="" s_telling="" s_like="Animal: Dog" />
//           </View>
//         </View>
//       </StoryBox>
//       <View>
//         <hr />
//       </View>
//       <StoryBox>
//         <Story
//           s_title="Pinned Stories"
//           s_date="October 23, 1967"
//           s_telling="When John was 22, he backpacked across New Zealand. His favourite memory from this trip was surfing every morning, he would carry his surfboard everywhere. He was tempted to settle down in New Zealand, but shortly after met the love of his life during a christmas party at home."
//           s_like=""
//         />
//       </StoryBox>
//       <View>
//         <hr />
//       </View>
//       <StoryBox>
//         <Story
//           s_title="Timeline"
//           s_date="April 21, 1965"
//           s_telling=""
//           s_like=""
//         />
//         <SortButton />
//         <TimePic
//           caption="John on his way to Hawaii for spring break during college."
//           imgurl={require("../../Images/johnhawaii.png")}
//         />
//         <Story s_title="" s_date="July 30, 1966" s_telling="" s_like="" />
//         <TimePic
//           caption="John (third to the right in the back row) on his high school swim team."
//           imgurl={require("../../Images/johnswim.png")}
//         />
//       </StoryBox>
//     </View>
//   );
// };

// export default Sortpage;

import React, {useState} from "react";
import Header from '../../comps/Header';
import UploadMedia from '../../comps/UploadMedia';
import StoryBox from '../../comps/StoryBox';
import MyAvatar from '../../comps/Avatar';
import Story from '../../comps/Story';
import MyPreferences from '../../comps/Preferences';
import TextName from '../../comps/TextName';
import HrDivider from '../../comps/Divider';
import VrDivider from '../../comps/VrDivider';
import TimePic from '../../comps/TimePic';
import SortButton from '../../comps/SortButton';
import SortWindow from '../../comps/SortWindow';

import {View, StyleSheet, Text, ScrollView, Image, Button, BlurView} from "react-native";
import {Dimensions} from 'react-native';

const deviceWidthP = Dimensions.get('window').width*0.90;
const deviceWidthS = Dimensions.get('window').width*0.60;
const deviceHeightF = Dimensions.get('window').height;
const deviceWidthF = Dimensions.get('window').width;

const styles = StyleSheet.create({
  homecont: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5"
  },
  likes: {
    flexDirection: "row",
  },
  media: {
    position: "absolute",
    width: deviceWidthF,
    bottom: 40,
  },
  timeline: {
    width: deviceWidthP,
    fontSize: 24,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  HrDividerS: {
    marginTop: -25,
    marginBottom: 25,
  },
  sortPopup: {
    position: "absolute",
    marginTop: "100%",
    zIndex: 1,
    backgroundColor:"#F1F1F1",
    opacity: 0.9,
    height: deviceHeightF,
    justifyContent: "center",

  },
  container: {
    position: "absolute",
    zIndex: 1,
    width: deviceWidthS,
  }
})

const SortPage= () => {
  const [shouldShow, setShouldShow] = useState(true);

  return (
    <View style={styles.homecont}>
        <Header />
            <View style={styles.container}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <SortWindow />
        ) : null}
      </View>
      <ScrollView>
      <View style={styles.image}>
          <StoryBox>
            <MyAvatar dim={180}/>
              <TextName style={styles.name} text="John Moon" />
          </StoryBox>
          <HrDivider />
        </View>
        <StoryBox>
          <View style={styles.likes}>
            <MyPreferences dim={170} p_title="Likes" p_contentfood="Dessert: Brownies" p_contentcolour="Colour: Orange" p_contentanimal="Animal: Parrots" p_contentseason="Season: Fall"/>
            <VrDivider />
            <MyPreferences dim={180} p_title="Dislikes" p_contentfood="Food: Mushrooms" p_contentcolour="Colour: Brown" p_contentanimal="Animal: Lizzards" p_contentseason="Season: Winter"/>
          </View>
        </StoryBox>
        <View>
           <StoryBox>
            <Story s_title="Pinned Stories" s_date="October 23, 1967" s_telling="When John was 22, he backpacked across New Zealand. His favourite memory from this trip was surfing every morning, he would carry his surfboard everywhere. He was tempted to settle down in New Zealand, but shortly after met the love of his life during a christmas party at home." />
        </StoryBox>
        <HrDivider />
        </View>
        <StoryBox>
        <View style={styles.timeline}>
        <Text >Timeline</Text>
        <View>
          <Button title="Sort"
          onPress={() => setShouldShow(!shouldShow)} />
        </View>
        </View>
       <View>
         <TimePic caption="john on his way to hawaii for spring break during college" date="April 21, 1965" />
         <View style={styles.HrDividerS}>
         <HrDivider />
         </View>
       </View>
       <View>
         <TimePic imgurl={require("../../Images/johnswim.png")} date="May 21, 1965" />
       </View>
       </StoryBox>
        </ScrollView>
        <View style={styles.media} >
            <UploadMedia />
        </View>
    </View>
  )
}

SortPage.defaultProps = {

};

export default SortPage;