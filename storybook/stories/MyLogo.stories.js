import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import Logo from '../../comps/Logo';

storiesOf('Custom Logo', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Logo', () => (
    <Logo />
  ))

