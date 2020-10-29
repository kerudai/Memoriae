import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import Button1 from '../../comps/Button';

storiesOf('Custom Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Button', () => (
    <Button1 />
  ))

