import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import BackNav from '../../comps/BackNav';

storiesOf('Custom Back Navigation', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Back Navigation', () => (
    <BackNav />
  ))

