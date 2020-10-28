import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from './CenterView';
import UploadMedia from '../../comps/UploadMedia';

storiesOf('Custom Upload Media', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('My Custom Upload Media', () => (
    <UploadMedia />
  ))

