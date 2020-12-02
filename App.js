/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 //this imports pages seperately

import React from "react";
import {View, StyleSheet} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;



import FirstScreen from './pages/FirstScreen'
import ForgotPassword from './pages/ForgotPassword'
import LogInScreen from './pages/LogIn'
import Staff_home from './pages/staff_home';
import SeniorProfile from './pages/senior_profile';
import NewPost from './pages/NewPost';
import NewPostScreen from "./pages/NewPost";
import FamilyProfile from './pages/family_profile';
import Settings from './pages/Settings';
import AccountSettings from './pages/AccountSettings';
import Tutorial from './pages/Tutorial';
import RegisterPage from './pages/Register';
import AddSenior from './pages/AddSeniors';
import UpdateSenior from './pages/UpdateSeniors';

const styles = StyleSheet.create({
    maintcont: {
        height: deviceHeight,
    },
  });

const App = () => {
    return <NativeRouter>
        <View style={styles.maincont}>
            <Route exact path="/" component={LogInScreen} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/login" component={LogInScreen} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/staffhome" component={Staff_home} />
            <Route path="/seniorprofile/:id" component={SeniorProfile} />
            <Route path="/upload" component={NewPostScreen} />
            
            <Route path="/settings" component={Settings} />
            <Route path="/accountsettings" component={AccountSettings} />
            <Route path="/tutorial" component={Tutorial} />
        </View>
        </NativeRouter>
    
};

export default App;


