import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import LogInScreen from '../../pages/LogInScreen';

storiesOf('Log In Page', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Log In Page', () => (
    <LogInScreen />
  ))

