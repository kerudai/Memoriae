import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import EditIcon from '../../comps/EditIcon';

storiesOf('Custom Edit Icon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Edit Icon', () => (
    <EditIcon />
  ))

