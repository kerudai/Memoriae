import React from "react";
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
import EditIcon from '../../comps/EditIcon';

import { NativeRouter, Link, useHistory } from "react-router-native";

import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import {Dimensions} from 'react-native';
import { useState } from 'react';

const deviceWidthP = Dimensions.get('window').width*0.90;
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
    bottom: 80,
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
    position: 'absolute',
    // marginTop: "100%",
    left: 160,
    top: 60,
    zIndex: 10,
    backgroundColor:"#F1F1F1",
    opacity: 0.9,
    // height: deviceHeightF,
    // justifyContent: "center",
  },
  edit: {
    
  }
})

/*
  Get entries
    1.Make sure page has all the profile info instead of hard code
    2. Map the fake entries 
    3. when you can actually add entries, use get entry to get all entries from the database
    4. (they're all in the GetSeniors function)
    5. Console log out the resp to see if you got all the entry for all the seniors
    6. Create a state variable for entries with the same name as the fake data variable (after this, default will be empty array[])
    7. Set the entries with the backend info
  */ 
 
const FamilyProfile = () => {

  const [shouldShow, setShouldShow] = useState(true);

  return (
    <View style={styles.homecont}>
        <Header />
      <ScrollView>
      <View style={styles.image}>
          <StoryBox>
            <MyAvatar dim={180} />
            <TextName style={styles.name} text="Ryan Gozling" />
            <EditIcon style={styles.edit}/>
          </StoryBox>
          <HrDivider />
        </View>
        <StoryBox>
          <View style={styles.likes}>
            <MyPreferences dim={140} p_title="Likes" p_contentfood="Dessert: Brownies" p_contentcolour="Colour: Orange" p_contentanimal="Animal: Parrots" p_contentseason="Season: Fall"/>
            <EditIcon style={styles.edit}/>
            <VrDivider />
            <MyPreferences dim={150} p_title="Dislikes" p_contentfood="Food: Mushrooms" p_contentcolour="Colour: Brown" p_contentanimal="Animal: Lizzards" p_contentseason="Season: Winter"/>
            <EditIcon style={styles.edit}/>
          </View>
        </StoryBox>
        <View>
           <StoryBox>
            <Story s_title="Pinned Stories" s_date="October 23, 1967" s_telling="When John was 22, he backpacked across New Zealand. His favourite memory from this trip was surfing every morning, he would carry his surfboard everywhere. He was tempted to settle down in New Zealand, but shortly after met the love of his life during a christmas party at home." />
            <EditIcon style={styles.edit}/>
        </StoryBox>
        <HrDivider />
        </View>
        <StoryBox>
        <View style={styles.timeline}>
        <Text >Timeline</Text>
          <View>
            <TouchableOpacity  onPress={() => setShouldShow(!shouldShow)}>
              <SortButton />
            </TouchableOpacity>
            <Link to="/">
            <TouchableOpacity>
              
              <EditIcon style={styles.edit}/>
              
            </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.sortPopup}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <SortWindow />
        ) : null}
      </View>

       <View>
          {/* <TimePic caption="john on his way to hawaii for spring break during college" date="April 21, 1965" /> */}
          <TimePic date="May 1st, 2015" caption="A scene in Hangzhou" imgurl={require("../../Images/hangzhou.jpeg")}/>
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
          <Link to="/upload">
            <UploadMedia />
          </Link>
        </View>
    </View>
  )
}

export default FamilyProfile;