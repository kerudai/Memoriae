import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import StoryBox from '../../comps/StoryBox';

storiesOf('Custom Story Box', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Story Box', () => (
    <StoryBox />
  ))

