import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import FirstScreen from '../../pages/FirstScreen';

storiesOf('First Screen', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('First Screen', () => (
    <FirstScreen />
  ))

