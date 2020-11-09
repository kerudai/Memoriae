import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import Header from '../../comps/Header';

storiesOf('Custom Header', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Header', () => (
    <Header />
  ))

