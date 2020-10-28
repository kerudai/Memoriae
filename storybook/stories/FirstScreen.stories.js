import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import FirstScreen from '../../pages/FirstScreen';

storiesOf('First Page', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('First Page', () => (
    <FirstScreen />
  ))

