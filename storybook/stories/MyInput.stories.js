import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import Input from '../../comps/Input';

storiesOf('Custom Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Input', () => (
    <Input />
  ))

