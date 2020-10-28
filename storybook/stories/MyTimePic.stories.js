import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import MyTimePic from '../../comps/TimePic';

storiesOf('Custom Time Pic', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Time Pic', () => (
    <MyTimePic />
  ))

