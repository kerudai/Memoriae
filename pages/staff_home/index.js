import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, Text } from 'react-native';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import StoryBox from '../../comps/StoryBox';
import HrDivider from '../../comps/Divider';
import Avatar from '../../comps/Avatar';
import Story from '../../comps/Story';
import TextStatus from '../../comps/TextStatus';
import TextGreeting from '../../comps/TextGreeting';
import { createApi, authApi, createAuthApi } from '../../clientapi';
import Button1 from '../../comps/Button';
import { NativeRouter, Link, useHistory } from "react-router-native";

const deviceWidth = Dimensions.get('window').width * 0.85

const styles = StyleSheet.create({
  mcont: {
    alignItems: "center",
  },
  greetingbox: {
    width: deviceWidth,
    justifyContent: "space-between",
    margin: 10,
  },
  input: {
    height: 200
  },
  searchbutton: {
    marginTop: 30
  },
  connectbutton: {
    marginTop: 30
  },
  box: {
    flexDirection: "row",
    justifyContent: "center"
  },
  scont: {
  },
  tcont: {
    flexDirection: "row",
    width: deviceWidth,
    alignItems: "center",
    margin: 10
  },
  fcont: {
    marginLeft: 15,
    padding: 5,
  },
  connect: {
    // position: "absolute",
    // right:0
    // flexDirection: "row",
    // alignSelf:"center",
    // borderWidth: 1,
    // borderColor: "green",
    // borderRadius: 5,
    // padding: 5
    width: 100,
  }
})

var arr = [
  {
    id: 1,
    first_name: "Hecter",
    last_name: "Saladmenka",
    birth_date: 19390909,
    profile_picture: "picture",
    bio: "bio",
    likes: "Chilly",
    dislikes: "Goose",
    last_update: "Los Pollos has been his favorite...",
    created_at: "20200914"
  },
  {
    id: 2,
    first_name: "Skyler",
    last_name: "Shaw",
    birth_date: 20010919,
    profile_picture: "picture",
    bio: "bio",
    likes: "fish",
    dislikes: "potatoe",
    last_update: "Car wash has benn on her mind...",
    created_at: "20200915"
  },
  {
    id: 3,
    first_name: "Wauter",
    last_name: "Black",
    birth_date: 19450520,
    profile_picture: "picture",
    bio: "bio",
    likes: "Chemistry",
    dislikes: "Fly",
    last_update: "Wauter recently has found...",
    created_at: "20201124"
  }
]



const Staff_home = () => {

  const [account, setAccount] = useState("");
  const [seniors, setSeniors] = useState([]);
  /*const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoic3RhZmYiLCJ1c2VyX2lkIjoxLCJleHAiOjEwMDAwMDAwMDAwfQ.LDtKGdZsdnjy-myhmbxWOQMhe7w2dcls7lnNt6lTFcc";*/

  const search = async () => {
    console.log("Seraching...");

    const authApi = createAuthApi()
    let search = await authApi.getSenior({
      account_number: account,
    })
    console.log(search.data)
    setAccount(search.data)
  }

  const GetAllConnectedSeniors = async () => {
    const authApi = createAuthApi()
    /*await get all connected seniors*/
    var resp = await authApi.getConnectedSeniors()
    /*console.log the array out*/
    /*var resp = {
      data:arr
    }*/
    console.log("Get seniors!(staff_home)", resp.data);
    setSeniors([...resp.data]);
  }
  // const onPress = async () => {
  //   console.log("Connecting to senior..");

  //   let connect
  //   const api = createAuthApi()
  //   connect = await api.connectSenior({
  //     account_number: account_number
  //   })
  //   console.log("Connected!")
  // }

  useEffect(() => {
    GetAllConnectedSeniors();
  }, [])


  return (
    <View style={styles.mcont}>
      <Header />
      <StoryBox>
        {/* <Button1 onPress={HandleProfile}  /> */}
        <TouchableOpacity underlayColor="#ffffff00" style={styles.greetingbox}>
          <View style={styles.box}> 
            <Input style={styles.input} placeholder="Enter 5 digit number of the senior..."
              // onChangeText={(text) => {setAccount(text)}}
              onChangeText={GetAllConnectedSeniors} 
              />
            <View style={styles.searchbutton}>
              <Button1 text="Search" 
                onPress={() => { search(account) }}
                />
            </View>
          </View>
          <TextGreeting name="staffkeju" />
        </TouchableOpacity>
      </StoryBox>
      <View style={styles.scont}>
        <HrDivider />
        <StoryBox>
          {seniors.map((o, i) => {
            return <Link key={i} to={"/seniorprofile/" + o.id}>
              <View style={styles.tcont}>
                <Avatar dim={75} imgurl={o.profile_picture}/>
                <View style={styles.fcont}>
                  <TextStatus Name={o.first_name + ' ' + o.last_name} Update={o.last_update} />
                </View>
              </View>
            </ Link>
          })}
        </StoryBox>
      </View>
    </View>
  )
}

Staff_home.defaultProps = {
  onPress: () => { }
}

export default Staff_home;