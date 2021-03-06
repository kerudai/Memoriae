import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import MySortButton from '../../comps/SortButton';

storiesOf('Custom Sort Dropdown', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Sort Dropdown', () => (
    <MySortButton />
  ))

