import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import MyStory from '../../comps/Story';

storiesOf('Custom Story', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Story', () => (
    <MyStory />
  ))

