import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import ForgotPasswordScreen from '../../pages/ForgotPassword';

storiesOf('Forgot Password Page', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Forgot Password    Page', () => (
    <ForgotPasswordScreen />
  ))

