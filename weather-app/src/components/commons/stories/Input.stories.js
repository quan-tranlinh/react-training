import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import Input
import Input from '../Input';

// Defined stories for Input
storiesOf('Input', module)
  .add('Input', () => (
    <Input
      defaultValue="Honda"
      onBlur={action('changed')}
    />
  ));
