import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import NewPostScreen from '../../pages/NewPost';

storiesOf('New Post Page', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('New Post Page', () => (
    <NewPostScreen />
  ))

