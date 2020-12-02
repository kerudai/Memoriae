import React, {useEffect, useState} from "react";
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
import axios from 'axios';
import { createApi, authApi, createAuthApi } from '../../clientapi';
import { NativeRouter, Link, useHistory, useParams } from "react-router-native";
import {View, StyleSheet, Text, ScrollView, Image, Button, BlurView, TouchableOpacity} from "react-native";
import {Dimensions} from 'react-native';
import Axios from "axios";

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
    bottom: 80,
  },
  timeline: {
    width: deviceWidthP,
    fontSize: 24,
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 15,
    zIndex: 1,
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
})

// var profile = {
//   id: 33333,
//   first_name: "Kevin",
//   last_name: "Wu",
//   birth_date: "1986-11-21T20:15:24+00:00",
//   profile_picture: "KW",
//   bio: "Kevinbio",
//   likes: "Fish&Chips",
//   dislikes: "Poutine",
//   last_update: "Kevin has been...",
//   created_at: "20201125"
// }

var entries = [
  {
    id: 12333,
    title: "A lovely photo",
    date: "19880914",
    content: "The moment when...",
    last_update: "20201125",
    created_at: "20201125",
    family_member_id: 12333,
    senior_id: 76543
  }
]
const StaffProfile= () => {

  const [shouldShow, setShouldShow] = useState(true);
  const [profile, setProfile] = useState({});
  const {id}=useParams()
  const GetSeniors = async () => {
    console.log(id)
    const authApi = createAuthApi()
    var resp = await authApi.getSenior(parseInt(id))
    console.log(resp,resp.data)
    console.log(resp.data.likes)
    setProfile({...resp.data})
    //get all entries
  }

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
  useEffect(()=>{
    GetSeniors();
  }, [])
  return (
    <View style={styles.homecont}>
        <Header />
      <ScrollView>
      <View style={styles.image}>
          <StoryBox>
            <MyAvatar dim={180}/>
              <TextName style={styles.name} text="Ryan Gozling" />
              {/* <TextName style={styles.name} text={profile.first_name + " " + profile.last_name} /> */}
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
            <Story s_title="Pinned Stories" s_date="October 23, 1967" s_telling="When Ryan was 22, he backpacked across New Zealand. His favourite memory from this trip was surfing every morning, he would carry his surfboard everywhere. He was tempted to settle down in New Zealand, but shortly after met the love of his life during a christmas party at home." />
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
        </View>
        </View>
        <View style={styles.sortPopup}>
        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {shouldShow ? (
          <SortWindow />
        ) : null}
      </View>
       {entries.map((o,i)=>{
        return <View key={i}>
          <TimePic caption="Ryan on his way to hawaii for spring break during college" date="April 21, 1965" />
          <View style={styles.HrDividerS}>
          <HrDivider />
          </View>
          </View>
       })}
       </StoryBox>
        </ScrollView>
        {/* <View style={styles.media} >
          <Link to="/upload">
            <UploadMedia />
          </Link>
        </View> */}
    </View>
  )
}


export default StaffProfile;