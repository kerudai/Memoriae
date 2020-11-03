import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import FirstScreen from '../../pages/FirstScreen';
import ForgotPasswordScreen from '../../pages/ForgotPassword';
import LogInScreen from '../../pages/LogInScreen';
import NewPostScreen from '../../pages/NewPost';

storiesOf('Pages', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('First Page', () => (
    <FirstScreen />
  ))
  .add('Forgot Password Page', () => (
    <ForgotPasswordScreen />
  ))
  .add('Log In Page', () => (
    <LogInScreen />
  ))
  .add('New Post Page', () => (
    <NewPostScreen />
  ))


