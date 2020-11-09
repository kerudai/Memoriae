import React from "react";
import globalstyle from "../globalstyle";
import Avatar from "../../comps/Avatar";
import StoryBox from "../../comps/StoryBox";
import Story from "../../comps/Story";
import SortButton from "../../comps/SortButton";
import SortWindow from "../../comps/SortWindow";
import Header from "../../comps/Header";
import TimePic from "../../comps/TimePic";
import BackNav from "../../comps/BackNav";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  homecont: {
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    alignItems: "center"
  },
  john: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 425
  }
});

const Family_profile = () => {
  return (
    <View style={[globalstyle.rows, styles.homecont]}>
      <Header />
      <StoryBox>
        <BackNav text="John Moon" />
        <Avatar dim={190} />
        <Text style={[styles.john]}>John Moon</Text>
      </StoryBox>
      <View>
        <hr />
      </View>
      <StoryBox>
        <View style={{ flexDirection: "row" }}>
          <View style={({ flexDirection: "column" }, { marginRight: 50 })}>
            <Story s_title="Likes" s_date="" s_telling="" s_like="" />
            <Story
              s_title=""
              s_date=""
              s_telling=""
              s_like="Dessert: brownies"
            />
            <Story s_title="" s_date="" s_telling="" s_like="Music: Reggae" />
            <Story s_title="" s_date="" s_telling="" s_like="Season: Fall" />
            <Story s_title="" s_date="" s_telling="" s_like="Color: Orange" />
            <Story s_title="" s_date="" s_telling="" s_like="Animal: Parrot" />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Story s_title="Dislikes" s_date="" s_telling="" s_like="" />
            <Story
              s_title=""
              s_date=""
              s_telling=""
              s_like="Food: Mushrooms, Cinnamon"
            />
            <Story s_title="" s_date="" s_telling="" s_like="Music: Jazz" />
            <Story s_title="" s_date="" s_telling="" s_like="Animal: Dog" />
          </View>
        </View>
      </StoryBox>
      <View>
        <hr />
      </View>
      <StoryBox>
        <Story
          s_title="Pinned Stories"
          s_date="October 23, 1967"
          s_telling="When John was 22, he backpacked across New Zealand. His favourite memory from this trip was surfing every morning, he would carry his surfboard everywhere. He was tempted to settle down in New Zealand, but shortly after met the love of his life during a christmas party at home."
          s_like=""
        />
      </StoryBox>
      <View>
        <hr />
      </View>
      <StoryBox>
        <Story
          s_title="Timeline"
          s_date="April 21, 1965"
          s_telling=""
          s_like=""
        />
        <SortButton />
        <TimePic
          caption="John on his way to Hawaii for spring break during college."
          imgurl={require("../../../Images/johnhawaii.png")}
        />
        <Story s_title="" s_date="July 30, 1966" s_telling="" s_like="" />
        <TimePic
          caption="John (third to the right in the back row) on his high school swim team."
          imgurl={require("../../../Images/johnswim.png")}
        />
      </StoryBox>
    </View>
  );
};

export default Family_profile;
