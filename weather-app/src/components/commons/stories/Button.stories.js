import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import styled for Button
import Button from '../Button';

// Defined stories for Button
storiesOf('Button', module)
  .add('Button Success', () => (
    <Button
      onClick={action('clicked')}
      text="Add"
    />
  ))
  .add('Button Danger', () => (
    <Button
      onClick={action('clicked')}
      text="Delete"
      customStyle={{
        backgroundColor: 'red',
      }}
    />
  ));
