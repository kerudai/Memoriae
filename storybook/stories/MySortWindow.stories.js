import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import MySortWindow from '../../comps/SortWindow';

storiesOf('Custom Sort Window', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Sort Window', () => (
    <MySortWindow />
  ))

