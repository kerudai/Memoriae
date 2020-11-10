import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import MyAvatar from '../../comps/Avatar';

storiesOf('Custom Avatar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Avatar', () => (
    <MyAvatar />
  ))

